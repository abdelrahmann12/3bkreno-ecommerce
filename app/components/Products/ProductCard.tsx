import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
// import Link from "next/link"

export default function ProductCard() {
  return (
    <>
      <div className="heading">
        <h3 className=" text-center text-2xl">Shop by Category</h3>
      </div>{" "}
      <div
        className="
    products 
    grid 
    gap-6 
    my-5
    grid-cols-1
    sm:grid-cols-2
    md:grid-cols-3
    lg:grid-cols-5
  "
      >
        <Card>
          <CardHeader>
            <Image
              className="w-full object-cover"
              src={"/book_n.jpg"}
              alt="product img"
              width={500}
              height={500}
            />

            <CardDescription className="mt-2 font-semibold">
              كتاب أنشطة رمضانية
            </CardDescription>

            {/* السعر */}
            <div className="flex items-center gap-2 mt-1">
              <span className="text-lg font-bold text-black">120 جنيه</span>
              <span className="text-sm text-gray-400 line-through">
                160 جنيه
              </span>
            </div>
          </CardHeader>

          <CardFooter className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Button variant="outline">Add to Cart</Button>
              <Button variant="outline">Add to Wish</Button>
            </div>
          </CardFooter>
        </Card>

        <Card className="">
          <CardHeader>
            {/* <Link href={""}> */}
            <Image
              className=" w-full object-cover"
              src={"/Shark.jpg"}
              alt={`product img`}
              width={500}
              height={500}
            ></Image>
            {/* </Link> */}
            <CardTitle className="text-main"></CardTitle>
            <CardDescription>baby shark</CardDescription>
            {/* السعر */}
            <div className="flex items-center gap-2 mt-1">
              <span className="text-lg font-bold text-black">250 جنيه</span>
              <span className="text-sm text-gray-400 line-through">
                160 جنيه
              </span>
            </div>
          </CardHeader>
          <CardFooter className=" flex items-center justify-between">
            <div className="btn flex items-center gap-2">
              <Button variant="outline">Add to Cart</Button>
              <Button variant="outline">Add to Wish</Button>
            </div>
          </CardFooter>
        </Card>

        <Card className="">
          <CardHeader>
            {/* <Link href={""}> */}
            <Image
              className=" w-full object-cover"
              src={"/trainn.jpg"}
              alt={`product img`}
              width={500}
              height={500}
            ></Image>
            {/* </Link> */}
            <CardTitle className="text-main"></CardTitle>
            <CardDescription>train</CardDescription>
            {/* السعر */}
            <div className="flex items-center gap-2 mt-1">
              <span className="text-lg font-bold text-black">300 جنيه</span>
              <span className="text-sm text-gray-400 line-through">
                160 جنيه
              </span>
            </div>
          </CardHeader>
          <CardFooter className=" flex items-center justify-between">
            <div className="btn flex items-center gap-2">
              <Button variant="outline">Add to Cart</Button>
              <Button variant="outline">Add to Wish</Button>
            </div>
          </CardFooter>
        </Card>
        <Card className="">
          <CardHeader>
            {/* <Link href={""}> */}
            <Image
              className=" w-full object-cover"
              src={"/fanoos.jpg"}
              alt={`product img`}
              width={500}
              height={500}
            ></Image>
            {/* </Link> */}
            <CardTitle className="text-main"></CardTitle>
            <CardDescription>fanoos</CardDescription>
           {/* السعر */}
            <div className="flex items-center gap-2 mt-1">
              <span className="text-lg font-bold text-black">120 جنيه</span>
              <span className="text-sm text-gray-400 line-through">
                160 جنيه
              </span>
            </div>
          </CardHeader>
          <CardFooter className=" flex items-center justify-between">
            <div className="btn flex items-center gap-2">
              <Button variant="outline">Add to Cart</Button>
              <Button variant="outline">Add to Wish</Button>
            </div>
          </CardFooter>
        </Card>
        <Card className="">
          <CardHeader>
            {/* <Link href={""}> */}
            <Image
              className=" w-full object-cover"
              src={"/fanoos.jpg"}
              alt={`product img`}
              width={500}
              height={500}
            ></Image>
            {/* </Link> */}
            <CardTitle className="text-main"></CardTitle>
            <CardDescription>fanoos</CardDescription>
           {/* السعر */}
            <div className="flex items-center gap-2 mt-1">
              <span className="text-lg font-bold text-black">120 جنيه</span>
              <span className="text-sm text-gray-400 line-through">
                160 جنيه
              </span>
            </div>
          </CardHeader>
          <CardFooter className=" flex items-center justify-between">
            <div className="btn flex items-center gap-2">
              <Button variant="outline">Add to Cart</Button>
              <Button variant="outline">Add to Wish</Button>
            </div>
          </CardFooter>
        </Card>
        <Card className="">
          <CardHeader>
            {/* <Link href={""}> */}
            <Image
              className=" w-full object-cover"
              src={"/octopus.jpg"}
              alt={`product img`}
              width={500}
              height={500}
            ></Image>
            {/* </Link> */}
            <CardTitle className="text-main"></CardTitle>
            <CardDescription>fanoos</CardDescription>
            {/* السعر */}
            <div className="flex items-center gap-2 mt-1">
              <span className="text-lg font-bold text-black">120 جنيه</span>
              <span className="text-sm text-gray-400 line-through">
                160 جنيه
              </span>
            </div>
          </CardHeader>
          <CardFooter className=" flex items-center justify-between">
            <div className="btn flex items-center gap-2">
              <Button variant="outline">Add to Cart</Button>
              <Button variant="outline">Add to Wish</Button>
            </div>
          </CardFooter>
        </Card>
        <Card className="">
          <CardHeader>
            {/* <Link href={""}> */}
            <Image
              className=" w-full object-cover"
              src={"/warsha.jpg"}
              alt={`product img`}
              width={500}
              height={500}
            ></Image>
            {/* </Link> */}
            <CardTitle className="text-main"></CardTitle>
            <CardDescription>fanoos</CardDescription>
           {/* السعر */}
            <div className="flex items-center gap-2 mt-1">
              <span className="text-lg font-bold text-black">120 جنيه</span>
              <span className="text-sm text-gray-400 line-through">
                160 جنيه
              </span>
            </div>
          </CardHeader>
          <CardFooter className=" flex items-center justify-between">
            <div className="btn flex items-center gap-2">
              <Button variant="outline">Add to Cart</Button>
              <Button variant="outline">Add to Wish</Button>
            </div>
          </CardFooter>
        </Card>
        <Card className="">
          <CardHeader>
            {/* <Link href={""}> */}
            <Image
              className=" w-full object-cover"
              src={"/bogy2.jpg"}
              alt={`product img`}
              width={500}
              height={500}
            ></Image>
            {/* </Link> */}
            <CardTitle className="text-main"></CardTitle>
            <CardDescription>fanoos</CardDescription>
           {/* السعر */}
            <div className="flex items-center gap-2 mt-1">
              <span className="text-lg font-bold text-black">120 جنيه</span>
              <span className="text-sm text-gray-400 line-through">
                160 جنيه
              </span>
            </div>
          </CardHeader>
          <CardFooter className=" flex items-center justify-between">
            <div className="btn flex items-center gap-2">
              <Button variant="outline">Add to Cart</Button>
              <Button variant="outline">Add to Wish</Button>
            </div>
          </CardFooter>
        </Card>
        <Card className="">
          <CardHeader>
            {/* <Link href={""}> */}
            <Image
              className=" w-full object-cover"
              src={"/bogy.jpg"}
              alt={`product img`}
              width={500}
              height={500}
            ></Image>
            {/* </Link> */}
            <CardTitle className="text-main"></CardTitle>
            <CardDescription>fanoos</CardDescription>
           {/* السعر */}
            <div className="flex items-center gap-2 mt-1">
              <span className="text-lg font-bold text-black">120 جنيه</span>
              <span className="text-sm text-gray-400 line-through">
                160 جنيه
              </span>
            </div>
          </CardHeader>
          <CardFooter className=" flex items-center justify-between">
            <div className="btn flex items-center gap-2">
              <Button variant="outline">Add to Cart</Button>
              <Button variant="outline">Add to Wish</Button>
            </div>
          </CardFooter>
        </Card>
        <Card className="">
          <CardHeader>
            {/* <Link href={""}> */}
            <Image
              className=" w-full object-cover"
              src={"/fanoos2.jpg"}
              alt={`product img`}
              width={500}
              height={500}
            ></Image>
            {/* </Link> */}
            <CardTitle className="text-main"></CardTitle>
            <CardDescription>fanoos</CardDescription>
            {/* السعر */}
            <div className="flex items-center gap-2 mt-1">
              <span className="text-lg font-bold text-black">120 جنيه</span>
              <span className="text-sm text-gray-400 line-through">
                160 جنيه
              </span>
            </div>
          </CardHeader>
          <CardFooter className=" flex items-center justify-between">
            <div className="btn flex items-center gap-2">
              <Button variant="outline">Add to Cart</Button>
              <Button variant="outline">Add to Wish</Button>
            </div>
          </CardFooter>
        </Card>
      </div>
    </>
  );
}
