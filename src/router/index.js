import React from 'react'
import {Route,Switch,Redirect} from 'react-router-dom'

import Home from '../components/Home'
import Details from '../components/Details'
import Comment from '../components/Comment'
import Collect from '../components/Collect'
// import Menu from '../components/Menu'

const Router = ()=>{
    return (
        <div>
            <Switch>
                <Route path='/home' component={Home}/>
                {/*<Route path='/menu' component={Menu}/>*/}
                <Route path='/collect' component={Collect}/>
                <Route path='/details' component={Details}/>
                <Route path='/comment' component={Comment}/>
                <Redirect to='/home'/>
            </Switch>
        </div>
    )
};

export default Router