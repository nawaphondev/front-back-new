/* eslint-disable react/prop-types */
import RegisterForm from "../forms/RegisterForm";
import { DataTable } from "./DataTable";
import { columns } from "./UserTableColumns";
import { useQuery } from "@tanstack/react-query";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,

} from "@/components/ui/dialog"
import { Button } from "../ui/button";
import axios from "axios";


export default function UserTable({userType = "user"}) {
  const { data, isError, isLoading } = useQuery({
    queryKey: [userType],
    queryFn: async () => {
      return axios.get(`http://localhost:3001/api/users/${userType}s`).then(res => res.data)
    },
  })

  if (isError) return <div>Error</div>
  if (isLoading) return <div>Loading...</div>
  
  return (
    <div className="flex flex-col">
      {userType === "admin" && <Dialog>
        <Button className="place-self-end" asChild>
          <DialogTrigger>Add admin</DialogTrigger>
        </Button>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>เพิ่มบัญชีแอดมิน</DialogTitle>
          </DialogHeader>
          <RegisterForm />
        </DialogContent>
      </Dialog>
      }
      <DataTable columns={columns} data={data} showColumnVisibility={false}/>
    </div>
  )
}
