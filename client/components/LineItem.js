import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';

// redux
import { connect } from 'react-redux'
import { removeListItem, hideListItem, addBackToCart, updateQuantityToLineitem } from '../store/cart'
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
        this.props.updateQuantity({ ...this.props.item, quantity: selectedQuantity, }, this.props.order)
    }

    render() {
        const { item, routeProps, remove, save, hide, removeWish, addBackToCart } = this.props;
        const { quantity } = this.state;

        return (
            <div >
                <Grid container direction="row" spacing={0} justifyContent="space-evenly" alignItems="center" sx={{ margin: '2rem 0' }}>
                    <Grid item xs={2} sx={{ padding: '0 1rem' }}>
                        <Link to={`/${item.categoryName}/${item.productName}`}><img src={item.imageUrl} className='lineitem_img' /></Link>
                    </Grid>
                    <Grid item xs={6}>
                        {item && item.productName}<br />
                        <Link to={`/${item.categoryName}/${item.productName}`} className='line_item_link'>{item.productName}</Link>
                        <br />
                        <br />
                        Size: {item.productSize}<br />
                        Color: {item.productColor}<br />
                        Price: ${item.productPrice}<br />
                        {/* SKU number: {item.productSKUId}<br />
                        Line Item Id: {item.id}<br />
                        Order Id: {item.orderId}<br /> */}
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
                        {
                            routeProps.match.path === '/cart' ?
                                <FormControl sx={{ width: '80%' }}>
                                    <InputLabel id="demo-simple-select-label">Quantity</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        defaultValue={1}
                                        value={quantity}
                                        label="Quantity"
                                        onChange={(e) => this.handleQuantity(e)}
                                    >
                                        {
                                            Array.from({ length: this.state.sku && this.state.sku.availableStock }, (_, index) => index + 1)
                                                .map(quant => <MenuItem key={quant} value={quant}> {quant} </MenuItem>)
                                        }
                                    </Select>
                                </FormControl>
                                : <p>{item.quantity}</p>
                        }
                        
                    </Grid>
                    <Grid item xs={2}>
                        Total: ${item.total}
                    </Grid>
                </Grid>
            </div>
        )
    }
}

const mapState = (state) => {
    return {
        order: state.order,
        categories: state.categories
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
        updateQuantity(lineitem, order) {
            dispatch(updateQuantityToLineitem(lineitem, order))
        }
    }
}

export default connect(mapState, mapDispatch)(LineItem)




