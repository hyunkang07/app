import styled from "styled-components";
import SingBox from "./SingBox";

const BoxContainer = styled.div`
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
    justify-content: center;
`;

const data = [
    {
    title: '박스1',
    price: '20000',
    imgContent: 'https://blog.kakaocdn.net/dn/cF4JJT/btsJQXMHN9Q/OAMpeHgbnkmT7k1CkxgEfk/img.png'
},
    {title: '박스2',price: '20000',
    imgContent: 'https://blog.kakaocdn.net/dn/cF4JJT/btsJQXMHN9Q/OAMpeHgbnkmT7k1CkxgEfk/img.png'},
    {title: '박스3',price: '20000',
    imgContent: 'https://blog.kakaocdn.net/dn/cF4JJT/btsJQXMHN9Q/OAMpeHgbnkmT7k1CkxgEfk/img.png'},
    {title: '박스4',price: '20000',
    imgContent: 'https://blog.kakaocdn.net/dn/cF4JJT/btsJQXMHN9Q/OAMpeHgbnkmT7k1CkxgEfk/img.png'},
]

function SingBoxList(){
    return(
        <BoxContainer>
            {
                data.map((item,idx)=>(
                    <SingBox key={idx} title={item.title} price={item.price} imgContent={item.imgContent} />
                ))
            }
        </BoxContainer>
    )
}

export default SingBoxList;