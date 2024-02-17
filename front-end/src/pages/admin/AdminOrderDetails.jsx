import { NavLink, useLocation } from "react-router-dom";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  TableFooter
} from "@/components/ui/table"
import thaiAddress from "@/lib/thaiAddress";
import Moment from 'react-moment';

export default function AdminOrderDetails() {
  const { state: order } = useLocation();

  return (
    
    <div className="flex flex-col">
      <div className="flex flex-row items-start justify-between">
        <div>
          <NavLink to="/">Dashboard</NavLink>
          {" > "}
          <NavLink to="/orders">Order List</NavLink>
          {" > "}
          <span className="text-primary">Order Detail</span>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4">
        <div className="flex flex-col gap-4 p-4 bg-white rounded-md">
          <div>translate <span>#{order.id}</span></div>
          <Moment>{order.orderDate}</Moment>
          <div>payment api to be done</div>
        </div>
        <div className="flex flex-col col-span-2 gap-4 p-4 bg-white rounded-md">
          <h1>translate</h1>
          <div>{order.user.firstName} {order.user.lastName}</div>
          <div>{order.user.email}</div>
          <div>{order.user.phoneNumber}</div>
        </div>
        <div className="flex flex-col col-span-2 gap-4 p-4 bg-white rounded-md">
          <h1>translate</h1>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">ID</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Color</TableHead>
                <TableHead>Capacity</TableHead>
                <TableHead className="w-[100px]">Quantity</TableHead>
                <TableHead className="text-right">Amount</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {order.orderDetails.map((item) => {
                return (
                  <TableRow key={item.id}>
                    <TableCell className="font-medium">{item.id}</TableCell>
                    <TableCell className="font-medium">{item.product.name}</TableCell>
                    <TableCell className="font-medium">{item.product.color}</TableCell>
                    <TableCell className="font-medium">{item.product.capacity}</TableCell>
                    <TableCell>{item.price}</TableCell>
                    <TableCell>{item.quantity}</TableCell>
                    <TableCell className="text-right">{item.price * item.quantity}</TableCell>
                  </TableRow>
                )
              })}
            </TableBody>
            
            <TableFooter>
              <TableRow>
                <TableCell colSpan={5}></TableCell>
                <TableCell colSpan={1}>Total</TableCell>
                <TableCell className="text-right">{order.orderDetails.reduce((acc, cur) => acc + cur.price * cur.quantity, 0)}</TableCell>
              </TableRow>
            </TableFooter>
          </Table>

          
          
        </div>
        <div className="flex flex-col gap-4 p-4 bg-white rounded-md">
          <h1>translate</h1>
          {thaiAddress(order.shippingAddress)}
        </div>
      </div>
      
      <pre>{JSON.stringify({...order}, null, 2)}</pre>
    </div>
  )
}
