import { useState, useRef, useEffect } from "react"
import { useContext } from "react"
import SimpleButton from "../../components/buttons/simple-button/SimpleButton"
import Footer from "../../components/footer/Footer"
import NavBar from "../../components/navbar/NavBar"
import Wrapper from "../../components/Wrapper"
import { StoreContext } from "../../store/StoreProvider"
import { ReactComponent as CameraIcon } from "../../assets/svg/camera.svg"
import "./ProfilePage.css"
import { resizeImageFile } from "../../helpers/resizeImage"
import imageFileToUrl from "../../helpers/imageFileToUrl"
import Spinner from "../../components/Spinner"
import parseJWT from "../../helpers/handleJWT"

const ProfilePage = () => {
	const { store, dispatch } = useContext(StoreContext)
	const { user, token } = store
	const [values, setValues] = useState(user)
	const [isLoading, setIsLoading] = useState(false)
	const [profileUrl, setProfileUrl] = useState(user.profileImage)
	const formRef = useRef()
	const { username, email, phone, direction, profileImage } = values

	useEffect(() => {
		if (typeof profileImage === "object") {
			imageFileToUrl(profileImage, (url) => {
				setProfileUrl(url)
			})
		}
	}, [profileImage])

	const handleInputChange = ({ target }) => {
		if (target.type === "file") {
			if (target.files && target.files[0])
				setValues({ ...values, [target.name]: target.files[0] })
			else setValues({ ...values, [target.name]: user.profileImage })
		} else setValues({ ...values, [target.name]: target.value })
	}

	const handleSubmit = async (e) => {
		e.preventDefault()
		if (isLoading) return
		setIsLoading(true)
		if (formRef.current) {
			const data = new FormData(formRef.current)
			if (data.getAll("profileImage")[0].size) {
				const image = await resizeImageFile(
					data.getAll("profileImage")[0],
					300,
					300
				)
				data.set("profileImage", image, "profile.png")
			}
			fetch("http://localhost:5000/api/user", {
				method: "PATCH",
				headers: {
					authorization: `Bearer ${token}`,
				},
				body: data,
			})
				.then((res) => {
					return res.json().then((data) => {
						if (res.ok) return data
						else return Promise.reject(data)
					})
				})
				.then((data) => {
					const accessToken = data.access_token
					const { user } = parseJWT(accessToken)
					localStorage.setItem("token", accessToken)
					dispatch({ type: "SET_USER", payload: user })
					dispatch({ type: "SET_TOKEN", payload: accessToken })
				})
				.catch((err) => console.log(err))
				.finally(() => setIsLoading(false))
		}
	}
	return (
		<>
			<NavBar />
			<Wrapper
				vertical
				grow={1}
				width="100%"
				maxWidth={500}
				margin="auto"
				gap="30px"
			>
				<form
					className="profile-page__form"
					onSubmit={handleSubmit}
					ref={formRef}
				>
					<div className="profile-page__img-ctn">
						<img src={profileUrl} alt={username} />
						<label>
							<CameraIcon width="30px" height="30px" fill="#fff" />
							<input
								type="file"
								accept="image/*"
								name="profileImage"
								onChange={handleInputChange}
							/>
						</label>
					</div>
					<div className="profile-page__form-group">
						<label>
							<p>Email:</p>
							<input
								type="email"
								name="email"
								value={email}
								onChange={handleInputChange}
							/>
						</label>
						<label>
							<p>Nombre de usuario:</p>
							<input
								name="username"
								value={username}
								onChange={handleInputChange}
							/>
						</label>
					</div>
					<div className="profile-page__form-group">
						<label>
							<p>Direccion:</p>
							<input
								name="direction"
								value={direction}
								onChange={handleInputChange}
							/>
						</label>
						<label>
							<p>Numero de telefono:</p>
							<input name="phone" value={phone} onChange={handleInputChange} />
						</label>
					</div>

					<SimpleButton>Guardar Cambios</SimpleButton>
				</form>
			</Wrapper>
			<Footer />
			{isLoading && <Spinner />}
		</>
	)
}

export default ProfilePage
