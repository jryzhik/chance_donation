import Layout from "../layouts/Layout";
import Image from 'next/image'
import { Card, Grid, Text, Link } from "@nextui-org/react";

// const [switcher] = ([
//     {name: 'Orphan Camp Fund', imgPath: "/img/thanks/orphan.svg"},
//     {name: 'Youth Camp Fund', imgPath: "/img/thanks/youth.svg"},
//     {name: 'Scholarship Fund', imgPath: "/img/thanks/scholarship.svg"}  
// ])
const BrainThanks = (props) => {
    const tabs = [
        {name: 'Orphan Camp Fund', imgPath: "/img/thanks/orphan.svg"},
        {name: 'Youth Camp Fund', imgPath: "/img/thanks/youth.svg"},
        {name: 'Scholarship Fund', imgPath: "/img/thanks/scholarship.svg"}  
    ]

 return(
    
    <Layout>
        <div className="thanks">
    <div className="cardthanks">
        <Card css={{ p: "$6", mw: "400px" }}>
        <Card.Header>
            <Image
            alt="nextui logo"
            src="/img/thanks/icon_chance.png"
            width="34px"
            height="34px"
            />
            <Grid.Container css={{ pl: "$6" }}>
            <Grid xs={12}>
                <Text h4 css={{ lineHeight: "$xs" }}>
                Project Chance
                </Text>
            </Grid>
            <Grid xs={12}>
                <Text css={{ color: "$accents8" }}>@chance.youth</Text>
            </Grid>
            </Grid.Container>
        </Card.Header>
        <Card.Body css={{ py: "$2" }}>
            <Text>
            From the bottom of our hearts, we thank you for your generocity. Your donation has been designated for <b>{tabs[props.id].name}</b>
            </Text>
        </Card.Body>
        <Card.Footer>
            <Link
            color="primary"
            target="_blank"
            href="/"
            >
            Return to site
            </Link>
        </Card.Footer>
        </Card>
    </div>
            <Image
            src={tabs[props.id].imgPath}
            alt="Picture of the author"
            width={500}
            height={500}
            />
        </div>
    </Layout>
  );
};
export default BrainThanks;