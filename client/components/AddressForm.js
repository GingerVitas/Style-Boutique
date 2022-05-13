import React from 'react';
import { TextField, Autocomplete } from '@mui/material';

const AddressForm = props => {
    const { onAddressChange, addressformValue, setAddressFormValue, onBillingAddressChange, billingAddressFormValue, setBillingAddressFormValue } = props;

    const states = ['AL', 'AK', 'AS', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC', 'FL', 'GA', 'GU', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'MP', 'OH', 'OK', 'OR', 'PA', 'PR', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'VI', 'WA', 'WV', 'WI', 'WY'];

    if(addressformValue) {
        return (
            <div>
                <form id='shippingAddressForm' name='shippingAddress'>
                    <TextField onChange={onAddressChange} value={addressformValue.addressLine1} required id="outlined-basic" label="Address" variant="outlined" name="addressLine1" type="text" style={{ width: '80%' }} /><br />
                    <TextField onChange={onAddressChange} value={addressformValue.addressLine2} required id="outlined-password-input" label="Apt, suite, company, c/o (optional)" variant="outlined" name="addressLine2" type="text" style={{ width: '80%' }} /><br />
                    <TextField onChange={onAddressChange} value={addressformValue.city} required id="outlined-password-input" label="City" variant="outlined" name="city" type="text" style={{ width: '80%' }} /><br />
                    <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        options={states}
                        sx={{ width: 300, margin: 0 }}
                        value={addressformValue.state}
                        onChange={(e, newValue) => {
                            setAddressFormValue({ ...addressformValue, state: newValue })
                        }}
                        renderInput={(params) => <TextField {...params} label="State" />}
                    /><br />
                    <TextField onChange={onAddressChange} value={addressformValue.zipCode} required id="outlined-password-input" label="Zip code" variant="outlined" name="zipCode" type="text" style={{ width: '80%' }} />
                </form>
            </div>
        )
    } else {
        return (
            <div>
                <form id='shippingAddressForm' name='shippingAddress'>
                    <TextField onChange={onBillingAddressChange} value={billingAddressFormValue.addressLine1} required id="outlined-basic" label="Address" variant="outlined" name="addressLine1" type="text" style={{ width: '80%' }} /><br />
                    <TextField onChange={onBillingAddressChange} value={billingAddressFormValue.addressLine2} required id="outlined-password-input" label="Apt, suite, company, c/o (optional)" variant="outlined" name="addressLine2" type="text" style={{ width: '80%' }} /><br />
                    <TextField onChange={onBillingAddressChange} value={billingAddressFormValue.city} required id="outlined-password-input" label="City" variant="outlined" name="city" type="text" style={{ width: '80%' }} /><br />
                    <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        options={states}
                        sx={{ width: 300, margin: 0 }}
                        value={billingAddressFormValue.state}
                        onChange={(e, newValue) => {
                            setBillingAddressFormValue({ ...billingAddressFormValue, state: newValue })
                        }}
                        renderInput={(params) => <TextField {...params} label="State" />}
                    /><br />
                    <TextField onChange={onBillingAddressChange} value={billingAddressFormValue.zipCode} required id="outlined-password-input" label="Zip code" variant="outlined" name="zipCode" type="text" style={{ width: '80%' }} />
                </form>
            </div>
        )
        
    }
    
}

export default AddressForm;