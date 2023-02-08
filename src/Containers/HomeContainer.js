import {connect} from 'react-redux'
import {Home} from '../Components/Home'
import {addTocart} from '../Service/Actions/Action'

const mapStateToProps =state =>({

})
const mapDispatchToProps =dispatch=>({
   addToCartHander:data=>dispatch(addTocart(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);