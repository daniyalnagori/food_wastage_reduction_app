import { gql } from "@apollo/client";

const ADDPOST =  gql`
mutation addPost($userId:String $title:String $description:String $quantity:Int $img1:String $img2:String $img3:String){
  addPost(userId:$userId title:$title description:$description quantity:$quantity img1:$img1 img2:$img2 img3:$img3){
    _id
    userId
    title 
    description
    quantity 
    img1
    img2
    img3
  }
}
`
export {
    ADDPOST,
}