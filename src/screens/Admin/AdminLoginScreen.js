import axios from 'axios';
import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AdminLoginScreen() {
	const [formData, setFormData] = useState({
		username: '',
		password: '',
	});

	const navigate = useNavigate();

	const handleLogin = () => {
		const AdminLogin = async () => {
			const options = {
				url: `${process.env.REACT_APP_API_URL}/api/admin/login`,
				method: 'POST',
				data: formData,
			};

			await axios
				.request(options)
				.then((response) => {
					const result = response.data;

					if (result.success) {
						console.log(result);
						localStorage.setItem('adminToken', result.adminToken);
						navigate('/admin')
					}
				})
				.catch((err) => {
					console.log(err);
				});

			// console.log(options);
		};

		AdminLogin();
	};

	return (
		<section className="w-full max-h-screen">
			<div className="h-screen flex items-center justify-center">
				<form className="flex w-[25%] flex-col gap-4">
					<div>
						<div className="mb-2 block">
							<Label htmlFor="username" value="Username" />
						</div>
						<TextInput
							onChange={(e) => {
								setFormData({ ...formData, username: e.target.value });
							}}
							id="username"
							type="text"
							placeholder="abcxyz38413"
							required
						/>
					</div>
					<div>
						<div className="mb-2 block">
							<Label htmlFor="password1" value="Password" />
						</div>
						<TextInput
							onChange={(e) => {
								setFormData({ ...formData, password: e.target.value });
							}}
							id="password1"
							type="password"
							placeholder="*******"
							required
						/>
					</div>
					<div className="flex items-center gap-2">
						<Checkbox id="remember" />
						<Label htmlFor="remember">Remember me</Label>
					</div>
					<Button onClick={handleLogin} className="bg-main">
						Login
					</Button>
				</form>
			</div>
		</section>
	);
}
