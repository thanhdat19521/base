import Banner from '@/components/features/home/Banner'
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/core/card'
import Paths from '@/configs/route'
import { Link } from 'react-router'

function Home() {
  return (
    <>
      <div>
        <h1>Welcome to the Home Page</h1>
        <p>This is the main page of our application.</p>
      </div>
      <Banner />
      <Card>
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card Description</CardDescription>
          <CardAction>Card Action</CardAction>
        </CardHeader>
        <CardContent>
          <p>Card Content</p>
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>

      <Link to={Paths.LOGIN} />
    </>
  )
}

export default Home
