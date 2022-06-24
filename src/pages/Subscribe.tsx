import { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { gql, useMutation } from '@apollo/client';

import { Logo } from '../components/Logo';
import { useCreateSubscriberMutation } from '../graphql/generated';

export function Subscribe() {
	const navigate = useNavigate();

	const [name, setName] = useState('');
	const [email, setEmail] = useState('');

	const [createSubscriber, { loading }] = useCreateSubscriberMutation();

	async function handleSubscribe(event: FormEvent) {
		event.preventDefault();

		await createSubscriber({
			variables: {
				name,
				email,
			},
		});

		navigate('/event');
	}

	return (
		<div className='min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center'>
			<div className='bg-reactIcon bg-no-repeat bg-top'>
				<div className='max-w-[1100px] w-full flex flex-col md:flex-row items-center justify-between mt-10 md:mt-20 mx-auto'>
					<div className='max-w-[640px] px-6 xl:px-0'>
						<div className='w-[200px] mx-auto md:mx-0'>
							<Logo />
						</div>

						<h1 className='mt-8 text-3xl lg:text-[2.5rem] text-center md:text-left leading-tight'>
							Construa uma{' '}
							<strong className='text-blue-500'>aplicação completa</strong>,
							<br />
							do zero, com <strong className='text-blue-500'>React</strong>
						</h1>

						<p className='mt-4 text-gray-200 text-center md:text-left leading-relaxed'>
							Em apenas uma semana você vai dominar na prática uma das
							tecnologias mais utilizadas e com alta demanda para acessar as
							melhores oportunidades do mercado.
						</p>
					</div>

					<div className='mt-8 md:mt-0 mb-4 md:mb-0 md:mx-6 px-6 md:px-8 py-8 bg-gray-700 border border-gray-500 rounded w-full md:w-auto'>
						<strong className='text-lg md:text-2xl mb-6 block'>
							Inscreva-se gratuitamente
						</strong>

						<form
							className='flex flex-col gap-2 w-full'
							onSubmit={handleSubscribe}
						>
							<input
								type='text'
								value={name}
								onChange={(e) => setName(e.target.value)}
								placeholder='Seu nome completo'
								className='bg-gray-900 px-5 h-14 rounded focus:outline-none focus:border focus:border-green-500 hover:border hover:border-green-500 focus:invalid:border focus:invalid:border-red-500 hover:invalid:border hover:invalid:border-red-500'
								required
							/>

							<input
								type='email'
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								placeholder='Seu e-mail'
								className='bg-gray-900 px-5 h-14 rounded focus:outline-none focus:border focus:border-green-500 hover:border hover:border-green-500 focus:invalid:border focus:invalid:border-red-500 hover:invalid:border hover:invalid:border-red-500'
								required
							/>

							<button
								type='submit'
								disabled={loading}
								className='mt-4 bg-green-500 uppercase py-4 rounded font-bold text-sm hover:bg-green-700 transition-colors disabled:opacity-50'
							>
								Garantir minha vaga
							</button>
						</form>
					</div>
				</div>

				<img src='/src/assets/code-mockup.png' alt='code mockup' />
			</div>
		</div>
	);
}
