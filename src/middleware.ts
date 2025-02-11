import { withAuth } from 'next-auth/middleware'

export default withAuth({
  callbacks: {
    // 認可に関する処理。
    authorized: ({ token }) => {
      console.log(token?.role)
      return token?.role === "admin" // "admin"
    },
  },
  // リダイレクトページ
  pages: {
    signIn: '/login',
  },
})

export const config = {
  // ルートとregister・api・loginはリダイレクト対象から外す
  // matcher: ['/((?!register|api|login|).*)'],

  // register・api・loginはリダイレクト対象から外す
  matcher: ['/((?!register|api|login).*)'],
}
