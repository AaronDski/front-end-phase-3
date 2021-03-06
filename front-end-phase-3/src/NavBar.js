import {Link} from 'react-router-dom'

function NavBar() {
    // let navy = document.querySelector('#nav-bar')
    // window.onscroll = function handleScrolly() {
        
    // }
    // function topFunction() {
    //     document.body.scrollTop = 0; // For Safari
    //     document.documentElement.scrollTop = 0; // For Chrome
    //   }
    // function handleRouteClick(e) {
    //     console.log(e.target.href)
    //     window.location.replace(e.target.href)
    // }
    return (
        <>
        <h2 style={{textAlign:'center',color:'#cda632', fontWeight:'bold',textShadow:'black 2px 2px 2px'}} >PartLister.com</h2>
        <div id="nav-bar"> 
            <Link class="btn btn-dark nav-btn" style={{marginRight: '20px', marginLeft: '40%'}} to='/parts_list' >Part List</Link> 
            <Link class="btn btn-dark nav-btn" style={{marginLeft: '20px',marginRight: '20px'}} to='/cart'>Cart</Link>
            <Link class="btn btn-dark nav-btn" style={{marginLeft: '20px'}} to='/home'>Home</Link>

        </div>
        </>
    )
}

export default NavBar
