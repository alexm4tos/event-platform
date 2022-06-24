interface Props {
	message: string;
}

export function AlertMessage({ message }: Props) {
	return (
		<div className='flex-1 justify-center mt-[40vh] flex'>
			<h2 className='font-bold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-300 animate-pulse'>
				{message}
			</h2>
		</div>
	);
}
