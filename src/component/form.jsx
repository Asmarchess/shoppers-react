import axios from "axios"
import { useForm } from "react-hook-form"


export default function Form() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()
const onSubmit = (data) => {
    axios.post("http://localhost:8000/users",data)
}
   return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <label >Ad</label>
      <input  {...register("name")} />
      <label >Soz</label>
      <input {...register("description", { required: true })} />
      <label >Money</label>
      <input  {...register("cost")} />
      {errors.exampleRequired && <span>This field is required</span>}
      <input type="submit" />
    </form>
  )
}