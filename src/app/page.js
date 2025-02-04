export default function Home() {
  return (
    <div className="text-center p-6">
      <h1 className="text-4xl font-bold">Welcome to My Board App</h1>
      <p className="mt-4 text-lg">Create and manage your boards with ease.</p>
      <a href="/boards" className="text-blue-500 underline mt-4 block">
        Go to Boards
      </a>
    </div>
  );
}
