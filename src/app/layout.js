export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-900 text-white font-sans">{children}</body>
    </html>
  );
}
