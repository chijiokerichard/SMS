import LoginPage from "./admin/adminLogin/pages";
import "@/app/globals.css"

export default function Home() {
  // const bg = "../../assets/bg.jpg"
    const bg = "https://images3.boardingschoolreview.com/photo/593/IMG-Academy-6r5kz9j4u144kso44sw8800k0-1122.webp";

  return (
    <div className="flex min-h-screen items-start flex-col justify-center p-16 no-scrollbar  font-sans"
            style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${bg})`,backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundPosition:"center" }}
    >
         <LoginPage/>
    </div>
  );
}
