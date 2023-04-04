import Layout from "../../src/layouts/Layout";
import Image from 'next/image'
import { Card, Grid, Text, Link } from "@nextui-org/react";





const Index = () => {
  return (
    <Layout>
        <div className="thanks">
    <div className="cardthanks">
        <Card css={{ p: "$6", mw: "400px" }}>
        <Card.Header>
            <img
            alt="nextui logo"
            src="img/thanks/icon_chance.png"
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
            From the bottom of our hearts, we thank you for your generocity. Your donation has been designated for <b>Orphan Camp FUND</b>
            </Text>
        </Card.Body>
        <Card.Footer>
            <Link
            icon
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
            src="/img/thanks/orphan.svg"
            alt="Picture of the author"
            width={500}
            height={500}
            />
        </div>
    </Layout>
  );
};
export default Index;
