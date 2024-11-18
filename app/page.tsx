import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Apple, ArrowRight, BarChart2, Calendar, Droplet, Heart, PlayCircle, ShieldCheck, Thermometer, Download, Users, Stethoscope } from 'lucide-react'

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center justify-center">
        <Link className="flex items-center justify-center" href="#">
          <ShieldCheck className="h-6 w-6 text-blue-500" />
          <span className="ml-2 text-lg font-bold">Health Journal</span>
        </Link>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 px-4 md:px-16 bg-blue-50">
          <div className=" px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_300px] lg:gap-12 xl:grid-cols-[1fr_400px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Track Your Health Journey with Health Journal
                  </h1>
                  <p className="max-w-[600px] text-gray-500 md:text-xl">
                    Monitor all your daily health data in one place. From diseases to medications, blood glucose to
                    pregnancy tracking, we've got you covered.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
                    href="#"
                  >
                    <Apple className="mr-2 h-5 w-5" />
                    App Store
                  </Link>
                  <Link
                    className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
                    href="#"
                  >
                    <PlayCircle className="mr-2 h-5 w-5" />
                    Google Play
                  </Link>
                </div>
              </div>
              <div className="mx-auto w-full max-w-[300px] aspect-[1/2] overflow-hidden rounded-[40px] border-[10px] border-gray-900 bg-gray-900 shadow-xl">
                <img
                  alt="Health Journal App Screenshot"
                  className="w-full h-full object-cover"
                  height="600"
                  src="/placeholder.svg?height=600&width=300"
                  style={{
                    aspectRatio: "300/600",
                    objectFit: "cover",
                  }}
                  width="300"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 px-4 md:px-16 bg-white">
          <div className="px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Comprehensive Health Tracking</h2>
            <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Thermometer className="h-6 w-6 mr-2 text-blue-500" />
                    Diseases & Infections
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Log and monitor various health conditions, symptoms, and treatments.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Heart className="h-6 w-6 mr-2 text-blue-500" />
                    Medications
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Keep track of your medications, dosages, and schedules.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Droplet className="h-6 w-6 mr-2 text-blue-500" />
                    Blood Glucose
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Monitor your blood sugar levels and track trends over time.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <BarChart2 className="h-6 w-6 mr-2 text-blue-500" />
                    Blood Pressure
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Record and analyze your blood pressure readings.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Calendar className="h-6 w-6 mr-2 text-blue-500" />
                    Body Weight
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Track your weight and body measurements over time.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Calendar className="h-6 w-6 mr-2 text-blue-500" />
                    Period & Pregnancy
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Monitor menstrual cycles and track pregnancy milestones.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 px-4 md:px-16 bg-blue-500 text-white">
          <div className="px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Start Your Health Journey Today</h2>
              <p className="max-w-[600px] text-gray-200 md:text-xl">
                Download Health Journal now and take control of your health data. Available on iOS and Android.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link
                  className="inline-flex h-10 items-center justify-center rounded-md bg-white px-8 text-sm font-medium text-blue-500 shadow transition-colors hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
                  href="#"
                >
                  <Apple className="mr-2 h-5 w-5" />
                  App Store
                </Link>
                <Link
                  className="inline-flex h-10 items-center justify-center rounded-md bg-white px-8 text-sm font-medium text-blue-500 shadow transition-colors hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
                  href="#"
                >
                  <PlayCircle className="mr-2 h-5 w-5" />
                  Google Play
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 px-4 md:px-16 bg-gray-100">
          <div className="px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Our Impact</h2>
            <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center justify-center">
                    <Download className="h-6 w-6 mr-2 text-blue-500" />
                    Downloads
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-4xl font-bold text-center">1000+</p>
                  <p className="text-center text-gray-500 mt-2">Happy users and counting</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center justify-center">
                    <Users className="h-6 w-6 mr-2 text-blue-500" />
                    People Helped
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-4xl font-bold text-center">800+</p>
                  <p className="text-center text-gray-500 mt-2">Lives improved through better health tracking</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center justify-center">
                    <Stethoscope className="h-6 w-6 mr-2 text-blue-500" />
                    Diseases Tracked
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-4xl font-bold text-center">250+</p>
                  <p className="text-center text-gray-500 mt-2">Different health conditions monitored</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500">© 2024 Health Journal. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}