import React,{Component} from 'react';

import Aux from '../../hoc/wrapped';
import classes from './layout.css';
import Toolbar from '../Navigation/Toolbar/toolbar'
import SideDrawer from '../Navigation/SideDrawer/sideDrawer'



class Layout extends Component{

    state={
        showSideDrawer:false,
    }

    sideDrawerCanceller=()=>{
        this.setState({showSideDrawer:false})
    }

    drawerToggolHandeller=()=>{
        this.setState((prevState)=>{
            return {showSideDrawer:!prevState.showSideDrawer}
        })
    }

    render(){
        return(
            <Aux>
                <Toolbar drawerToogle={this.drawerToggolHandeller}/>
                <SideDrawer show={this.state.showSideDrawer} cancel={this.sideDrawerCanceller}/>
                <main className={classes.content}>
                    {this.props.children}
                </main>
            </Aux>            
        )
    }
}

export default Layout;