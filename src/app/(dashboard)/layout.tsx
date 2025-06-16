'use client'

import { createClient } from '@/lib/supabase/client'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Home, MapPin, Users, MessageSquare, Settings, LogOut } from 'lucide-react'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const router = useRouter()
  const supabase = createClient()

  const handleLogout = async () => {
    await supabase.auth.signOut()
    router.push('/login')
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 bg-white shadow-md h-screen">
          <div className="p-6">
            <h2 className="text-xl font-bold">PlayGround Buddy</h2>
            <p className="text-sm text-gray-500">관리자 대시보드</p>
          </div>
          
          <nav className="mt-6">
            <Link href="/dashboard" className="flex items-center px-6 py-3 hover:bg-gray-100">
              <Home className="w-5 h-5 mr-3" />
              대시보드
            </Link>
            <Link href="/dashboard/playgrounds" className="flex items-center px-6 py-3 hover:bg-gray-100">
              <MapPin className="w-5 h-5 mr-3" />
              놀이터 관리
            </Link>
            <Link href="/dashboard/users" className="flex items-center px-6 py-3 hover:bg-gray-100">
              <Users className="w-5 h-5 mr-3" />
              사용자 관리
            </Link>
            <Link href="/dashboard/reviews" className="flex items-center px-6 py-3 hover:bg-gray-100">
              <MessageSquare className="w-5 h-5 mr-3" />
              리뷰 관리
            </Link>
            <Link href="/dashboard/settings" className="flex items-center px-6 py-3 hover:bg-gray-100">
              <Settings className="w-5 h-5 mr-3" />
              설정
            </Link>
          </nav>
          
          <div className="absolute bottom-0 w-64 p-6">
            <button
              onClick={handleLogout}
              className="flex items-center text-gray-600 hover:text-gray-900"
            >
              <LogOut className="w-5 h-5 mr-3" />
              로그아웃
            </button>
          </div>
        </div>
        
        {/* Main Content */}
        <div className="flex-1">
          <main>{children}</main>
        </div>
      </div>
    </div>
  )
}