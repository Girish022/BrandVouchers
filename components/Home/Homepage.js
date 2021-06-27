import { CardActions, Button,CardContent, CardMedia, Container ,Grid,Card ,Typography, CssBaseline} from '@material-ui/core'
import React from 'react'
import {useStyles} from './HomePage.styles'



const HomePage = ({vouchers}) => {
    const classes=useStyles();
    return (
        <div>
            <CssBaseline/>
            <Container maxWidth="md" className={classes.container}>
                <Grid container  spacing={4}  >
                    { vouchers && vouchers.map((voucher)=>{
                     return (
                        <Grid item xs={12} sm={6} md={4} lg={3} xl={2} key={voucher.id}>
                        <Card className={classes.cards}> 
                        <CardMedia className={classes.cardMedia} image={voucher.image}/>
                        <CardContent className={classes.cardContent}>
                        <Typography variant="h5" gutterBottom>
                             {voucher.description}
                            </Typography>
                            <CardActions>
                                <Button>Submit</Button>
                            </CardActions>
                        </CardContent>
                        </Card>
                      </Grid>
                     ) 
                    })}
                    
                </Grid>
            </Container>
            
        </div>
    )
}

export default HomePage
