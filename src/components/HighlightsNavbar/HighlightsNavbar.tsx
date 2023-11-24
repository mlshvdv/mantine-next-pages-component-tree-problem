import { useMediaQuery } from '@mantine/hooks';
import { Container, Paper, Text, Title } from '@mantine/core';
import { Carousel } from '@mantine/carousel';
import classes from './HighlightsNavbar.module.scss';

interface CardProps {
    image: string;
    title: string;
    category: string;
}

function Card({image, title, category}: CardProps) {
    return (
        <Paper
            shadow="sm"
            p="sm"
            style={ {backgroundImage: `url(${ image })`} }
            className={ classes.card }
        >
            <Text className={ classes.category }>
                { category }
            </Text>
            <Title order={ 3 } className={ classes.title }>
                { title }
            </Title>
        </Paper>
    );
}

export type HighlightsNavbarProps = {
    items: any[]
};

export function HighlightsNavbar({items}: HighlightsNavbarProps) {
    const mobile = useMediaQuery('(max-width: 48em)');
    
    const slides = items.map((item, index) => (
        <Carousel.Slide key={index}>
            <Card { ...item } />
        </Carousel.Slide>
    ));
    
    return (
        <Container
            size="xl"
            w="100%"
        >
            <Carousel
                slideSize={ {base: '100%', sm: '50%'} }
                slideGap={ {base: 'xl', sm: 2} }
                align="start"
                slidesToScroll={ mobile ? 1 : 2 }
            >
                { slides }
            </Carousel>
        </Container>
    );
}
