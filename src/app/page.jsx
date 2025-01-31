"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Flower, Truck, Clock, Star, Moon, Sun, Menu } from "lucide-react"
import { useState, useEffect } from "react"

export default function LandingPage() {
  const [darkMode, setDarkMode] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [darkMode])

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  return (
    <div className="flex flex-col min-h-screen bg-pink-50 dark:bg-gray-900 transition-colors duration-300">
      <header className="sticky top-0 z-50 w-full border-b border-pink-200 dark:border-gray-700 bg-white/95 dark:bg-gray-800/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-gray-800/60">
        <div className="container flex h-16 items-center justify-between mx-auto px-4">
          <Link className="flex items-center space-x-2" href="/">
            <img src="/images/2.jpg" alt="FlowerBox Logo" className="h-6 w-6" />
            <span className="font-bold text-pink-700 dark:text-pink-300 sm:inline-block">SnD FlowerBoxPonorogo</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            <Link
              href="#features"
              className="text-pink-700 dark:text-pink-300 hover:text-pink-500 dark:hover:text-pink-400"
            >
              Fitur
            </Link>
            <Link
              href="#gallery"
              className="text-pink-700 dark:text-pink-300 hover:text-pink-500 dark:hover:text-pink-400"
            >
              Galeri
            </Link>
            <Link
              href="#how-it-works"
              className="text-pink-700 dark:text-pink-300 hover:text-pink-500 dark:hover:text-pink-400"
            >
              Cara Pesan
            </Link>
            <Link
              href="#testimonials"
              className="text-pink-700 dark:text-pink-300 hover:text-pink-500 dark:hover:text-pink-400"
            >
              Testimonial
            </Link>
          </nav>
          <div className="flex items-center space-x-2">
           
           
            <a
              href="https://wa.me/6285135666976?text=Halo%20saya%20ingin%20memesan%20Flower%20Box"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex bg-pink-500 hover:bg-pink-600 text-white dark:bg-pink-600 dark:hover:bg-pink-700 px-6 py-3 rounded-lg text-sm font-medium"
            >
              Pesan Sekarang
            </a>
            <Button className="p-2" variant="outline" onClick={toggleDarkMode} aria-label="Toggle dark mode">
              {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            <Button
              className="md:hidden p-2"
              variant="outline"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
            <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden">
            <nav className="flex flex-col space-y-2 p-4 bg-white dark:bg-gray-800">
              <Link
                href="#features"
                className="text-pink-700 dark:text-pink-300 hover:text-pink-500 dark:hover:text-pink-400"
                onClick={() => setMobileMenuOpen(false)}
              >
                Fitur
              </Link>
              <Link
                href="#gallery"
                className="text-pink-700 dark:text-pink-300 hover:text-pink-500 dark:hover:text-pink-400"
                onClick={() => setMobileMenuOpen(false)}
              >
                Galeri
              </Link>
              <Link
                href="#how-it-works"
                className="text-pink-700 dark:text-pink-300 hover:text-pink-500 dark:hover:text-pink-400"
                onClick={() => setMobileMenuOpen(false)}
              >
                Cara Pesan
              </Link>
              <Link
                href="#testimonials"
                className="text-pink-700 dark:text-pink-300 hover:text-pink-500 dark:hover:text-pink-400"
                onClick={() => setMobileMenuOpen(false)}
              >
                Testimonial
              </Link>
              <a
                href="https://wa.me/6285135666976?text=Halo%20saya%20ingin%20memesan%20Flower%20Box"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-pink-500 hover:bg-pink-600 text-white dark:bg-pink-600 dark:hover:bg-pink-700 px-4 py-2 rounded-lg text-sm font-medium text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Pesan Sekarang
              </a>
            </nav>
          </div>
        )}
      </header>

      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-pink-100 to-purple-100 dark:from-gray-800 dark:to-gray-900">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-6xl/none text-pink-700 dark:text-pink-300">
                    Sewa Flower Box untuk Momen Spesial Anda
                  </h1>
                  <p className="max-w-[600px] text-pink-600 dark:text-pink-400 text-sm sm:text-base md:text-xl">
                    Tambahkan keindahan bunga segar ke acara Anda tanpa kerumitan. Sewa flower box kami untuk dekorasi
                    yang elegan dan praktis.
                  </p>
                </div>
                <div className="flex flex-col gap-2 sm:flex-row">
                  <a
                    href="https://wa.me/6285135666976?text=Halo%20saya%20ingin%20melihat%20katalog%20Flower%20Box"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center px-6 py-3 bg-pink-500 hover:bg-pink-600 text-white dark:bg-pink-600 dark:hover:bg-pink-700 rounded-lg text-sm sm:text-base font-semibold"
                  >
                    Lihat Katalog
                  </a>
                  <a
                    href="https://wa.me/6285135666976?text=Halo%20saya%20ingin%20bertanya%20mengenai%20Flower%20Box"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center px-6 py-3 border-2 border-pink-500 text-pink-500 hover:bg-pink-100 dark:border-pink-400 dark:text-pink-400 dark:hover:bg-pink-950 rounded-lg text-sm sm:text-base font-semibold"
                  >
                    Hubungi Kami
                  </a>
                </div>
              </div>
              <Image
               alt="Flower Box"
               className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
               height="550" // Ubah tinggi agar lebih rendah
               src="/images/1.jpg?height=650&width=550" // Sesuaikan query parameter jika perlu
               width="550" // Lebar tetap lebih besar dari tinggi
              />
            </div>
          </div>
        </section>

        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-lavender-100 dark:bg-gray-800">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8 sm:mb-12 text-purple-700 dark:text-purple-300">
              Keunggulan Kami
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  icon: Flower,
                  title: "Bunga Segar",
                  description: "Selalu menggunakan bunga segar berkualitas tinggi",
                },
                {
                  icon: Truck,
                  title: "Pengiriman Cepat",
                  description: "Layanan pengiriman dan pengambilan tepat waktu",
                },
                { icon: Clock, title: "Fleksibel", description: "Durasi sewa yang fleksibel sesuai kebutuhan Anda" },
                { icon: Star, title: "Desain Unik", description: "Berbagai pilihan desain flower box yang unik" },
              ].map((feature, index) => (
                <Card key={index} className="bg-white dark:bg-gray-700 border-purple-200 dark:border-purple-800">
                  <CardContent className="flex flex-col items-center space-y-2 p-6">
                    <feature.icon className="h-12 w-12 mb-2 text-purple-500 dark:text-purple-400" />
                    <h3 className="text-xl font-bold text-purple-700 dark:text-purple-300">{feature.title}</h3>
                    <p className="text-sm text-purple-600 dark:text-purple-400 text-center">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        


<section id="gallery" className="w-full py-12 md:py-24 lg:py-32 bg-mint-100 dark:bg-gray-900">
  <div className="container mx-auto px-4 md:px-6">
    <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8 sm:mb-12 text-green-700 dark:text-green-300">
      Galeri Flower Box
    </h2>
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
      {/* Gambar 1 */}
      <Image
  alt="Flower Box 2"
  className="aspect-[3/4] object-cover rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
  height="300"
  src="/images/1.jpg"
  width="200"
      />
      <Image
        alt="Flower Box 3"
        className="aspect-[3/4] object-cover rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
        height="300"
        src="/images/1.jpg"
        width="200"
      />
      <Image
        alt="Flower Box 4"
        className="aspect-[3/4] object-cover rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
        height="300"
        src="/images/1.jpg"
        width="200"
      />
      <Image
        alt="Flower Box 5"
        className="aspect-[3/4] object-cover rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
        height="300"
        src="/images/flower-box-5.jpg"
        width="200"
      />
      <Image
        alt="Flower Box 6"
        className="aspect-[3/4] object-cover rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
        height="300"
        src="/images/flower-box-6.jpg"
        width="200"
      />
      <Image
        alt="Flower Box 7"
        className="aspect-[3/4] object-cover rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
        height="300"
        src="/images/flower-box-7.jpg"
        width="200"
      />
      <Image
        alt="Flower Box 8"
        className="aspect-[3/4] object-cover rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
        height="300"
        src="/images/flower-box-8.jpg"
        width="200"
      />
 
    </div>
  </div>
</section>
```


        <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32 bg-pink-100 dark:bg-gray-800">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8 sm:mb-12 text-pink-700 dark:text-pink-300">
              Cara Pemesanan
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  step: 1,
                  title: "Pilih Flower Box",
                  description: "Pilih desain dan ukuran flower box yang Anda inginkan dari katalog kami.",
                },
                {
                  step: 2,
                  title: "Tentukan Tanggal",
                  description: "Pilih tanggal pengiriman dan pengambilan sesuai dengan acara Anda.",
                },
                {
                  step: 3,
                  title: "Nikmati Acara Anda",
                  description:
                    "Terima flower box di lokasi acara dan nikmati keindahannya. Kami akan mengambilnya kembali setelah acara selesai.",
                },
              ].map((item, index) => (
                <Card key={index} className="bg-white dark:bg-gray-700 border-pink-200 dark:border-pink-800">
                  <CardContent className="p-6">
                    <div className="text-4xl font-bold mb-2 text-pink-500 dark:text-pink-400">{item.step}</div>
                    <h3 className="text-xl font-bold mb-2 text-pink-700 dark:text-pink-300">{item.title}</h3>
                    <p className="text-pink-600 dark:text-pink-400">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32 bg-lavender-50 dark:bg-gray-900">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8 sm:mb-12 text-purple-700 dark:text-purple-300">
              Apa Kata Mereka
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  name: "Rina",
                  comment:
                    "Flower box yang saya sewa sangat cantik dan segar. Sangat meningkatkan suasana acara pernikahan saya!",
                },
                {
                  name: "Budi",
                  comment:
                    "Pelayanan yang sangat profesional. Pengiriman tepat waktu dan flower box dalam kondisi sempurna.",
                },
                {
                  name: "Siti",
                  comment:
                    "Saya sangat puas dengan variasi desain yang ditawarkan. Pasti akan menggunakan jasa ini lagi untuk acara mendatang.",
                },
              ].map((testimonial, index) => (
                <Card key={index} className="bg-white dark:bg-gray-700 border-purple-200 dark:border-purple-800">
                  <CardContent className="p-6">
                    <p className="mb-4 italic text-purple-600 dark:text-purple-400">"{testimonial.comment}"</p>
                    <p className="font-bold text-purple-700 dark:text-purple-300">- {testimonial.name}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="w-full py-6 bg-pink-200 dark:bg-gray-800">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col space-y-2">
              <h3 className="font-bold text-pink-700 dark:text-pink-300">Tentang Kami</h3>
              <p className="text-sm text-pink-600 dark:text-pink-400">
                SnD FlowerBoxPonorogo menyediakan layanan penyewaan flower box untuk berbagai acara spesial Anda.
              </p>
            </div>
            <div className="flex flex-col space-y-2">
              <h3 className="font-bold text-pink-700 dark:text-pink-300">Kontak</h3>
              <p className="text-sm text-pink-600 dark:text-pink-400">Email: - </p>
              <p className="text-sm text-pink-600 dark:text-pink-400">Telepon: 085 135 666 976</p>
            </div>
            <div className="flex flex-col space-y-2">
              <h3 className="font-bold text-pink-700 dark:text-pink-300">Ikuti Kami</h3>
              <div className="flex space-x-2">
                <Link
                  href="#"
                  className="text-pink-600 hover:text-pink-700 dark:text-pink-400 dark:hover:text-pink-300"
                >
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M9.509 2.003a1 1 0 0 0-1 1V14.74a2.239 2.239 0 1 1-2.238-2.239 1 1 0 0 0 1-1v-2.47a4.714 4.714 0 1 0 5.25 4.68v-7.3a6.45 6.45 0 0 0 4.33 1.65 1 1 0 0 0 1-1V3.003a1 1 0 0 0-1-1h-3.326a1 1 0 0 0-1-1h-3.016z" />
                  </svg>
                </Link>
                <Link
                  href="#"
                  className="text-pink-600 hover:text-pink-700 dark:text-pink-400 dark:hover:text-pink-300"
                >
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.772-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

