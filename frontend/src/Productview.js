import React from "react";
import './Product.css'
import { Card,CardBody, Image, Text}from "@chakra-ui/react";
import { StarIcon} from '@chakra-ui/icons';

function Products (props) {
    return (
    <div className="scroll-items">
                <Card className="product-card">
                <CardBody id="Card-content">
                <span className="imgbackdrop"><Image src={props.item.image}alt="rice" borderRadius="md"/></span>
                <Text className="ProductName">{props.item.name}</Text>
                <span className="Icons"><StarIcon/> <StarIcon/> <StarIcon/> <StarIcon/> <StarIcon/></span>
                <p><span className="rev">{props.item.reviews}</span></p>
                <p><span className="price"><span>&#8358;</span>{props.item.price}</span></p>
                </CardBody>
                </Card>
                </div>
     )
    
    }


      
        

export default Products
