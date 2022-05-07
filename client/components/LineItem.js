import React from 'react'
import axios from 'axios'

// redux
import { connect } from 'react-redux'
import { removeListItem, hideListItem, addBackToCart, addQuantityToLineitem } from '../store/cart'
import { addWishList, removeWishList} from '../store/wishList'

// mui
import { Button, InputLabel, MenuItem, FormControl, Select, Grid } from '@mui/material';

class LineItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            quantity: this.props.item.quantity&& this.props.item.quantity ,
            sku : {}
        }
        this.handleQuantity = this.handleQuantity.bind(this);
    }

    async componentDidMount(){
        const skus = (await axios.get(`/api/skus/${this.props.item.productName}`)).data
        const sku = skus.find(sku => sku.id === this.props.item.productSKUId);
        this.setState({ sku })
    }

    handleQuantity(event) {
        const selectedQuantity = event.target.value;
        this.setState({quantity: selectedQuantity});
        this.props.addquantity({ ...this.props.item, quantity: selectedQuantity, }, this.props.order)
    }

    render() {
        const { item, routeProps, remove, save, hide, removeWish, addBackToCart, product } = this.props;

        return (
            <div >
                <Grid container direction="row" spacing={0} justifyContent="space-evenly" alignItems="center" sx={{ margin: '2rem 0' }}>
                    <Grid item xs={2}>
                        <img src={item.imageUrl} className='lineitem_img' />
                    </Grid>
                    <Grid item xs={6}>
                        {product && product.brand}<br />
                        {item.productName}
                        <br />
                        <br />
                        Size: {item.productSize}<br />
                        Color: {item.productColor}<br />
                        Price: ${item.productPrice}<br />
                        SKU number: {item.productSKUId}<br />
                        Line Item Id: {item.id}<br />
                        Order Id: {item.orderId}<br />
                        {
                            routeProps.match.path === '/cart' ?
                                <div>
                                    <Button variant="text" onClick={() => remove(item.id)} color='black' sx={{ marginRight: '2rem' }}>Remove</Button>
                                    <Button variant="text" onClick={() => { save(item); hide(item) }} color='black'>Save for later</Button>
                                </div>
                                :
                                <div>
                                    <Button variant="text" onClick={() => { remove(item.id); removeWish(item) }} color='black' sx={{ marginRight: '2rem' }}>Remove</Button>
                                    <Button variant="text" onClick={() => { addBackToCart(item); removeWish(item) }} color='black'>Add back to cart</Button>
                                </div>
                        }
                    </Grid>
                    <Grid item xs={2}>
                        <FormControl sx={{ width: '80%' }}>
                            <InputLabel id="demo-simple-select-label">Quantity</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                defaultValue={1}
                                value={this.state.quantity}
                                label="Quantity"
                                onChange={(e) => this.handleQuantity(e)}
                            >
                                {
                                    Array.from({ length: this.state.sku && this.state.sku.availableStock }, (_, index) => index + 1)
                                        .map(quant => <MenuItem key={quant} value={quant}> {quant} </MenuItem>)
                                }
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={2}>
                        Total: ${item.total}
                    </Grid>
                </Grid>
            </div>
        )
    }
}

const mapState = (state, { item }) => {
    return {
        product: state.products.find(product => product.name === item.productName),
        // sku: state.skus.find(sku => sku.id === item.productSKUId),
        order: state.order
    };
};
const mapDispatch = dispatch => {
    return {
        remove(itemId) {
            dispatch(removeListItem(itemId))
         } ,
        removeWish(item) {
            dispatch(removeWishList(item))
        },
        save(item) {
            dispatch(addWishList(item))
        },
        hide(item) {
            dispatch(hideListItem(item))
        },
        addBackToCart(item) {
            dispatch(addBackToCart(item))
        },
        addquantity(lineitem, order) {
            dispatch(addQuantityToLineitem(lineitem, order))
        }
    }
}

export default connect(mapState, mapDispatch)(LineItem)

