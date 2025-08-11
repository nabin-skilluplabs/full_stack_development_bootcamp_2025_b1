export function Error({error}) {
    return (
    <div className="flex h-dvh justify-center items-center">
    <div className='text-5xl text-red-500'>Something went wrong</div>
    <div>{error.message}</div>
    </div>
    );
}