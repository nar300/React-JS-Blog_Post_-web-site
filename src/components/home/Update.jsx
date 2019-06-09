import React, { Component } from 'react'
import { update, updategetbyid } from '../../services/Homeservice';

export default class Update extends Component {

    constructor(props){
        super(props)
        this.state={
            data:{
                id :0,
                Title: "",
                Description: "",
            },
            isError:false,
            BlogList:[],
           
        }
    }


   componentWillMount(){
    const id = this.props.match.params.id
   updategetbyid(id)
   .then(res=>{
       console.log(res.data)
       this.setState({data : res.data})
   }).catch(err=>{
       console.error(err)
   })

   }

    Submit(e){
        e.preventDefault()
        console.log(this.state.data)
        const id=this.props.match.params.id
        update(id,this.state.data)
        .then(res=>{
            console.log(res.data)
            this.setState(res.data
                )
        }).catch(err=>console.error(err))

    
    }
    
    handle(e){
        const mydata ={...this.state.data}
        mydata[e.target.id]=e.target.value;
    
        this.setState({data:mydata})
    
    }    



    render() {
        return (
            <div className="container">
                <form onSubmit={(e)=>this.Submit(e)}> 
                <div className="form-group">
                  <label htmlFor="title">Title</label>
                  <input onChange={(e)=>this.handle(e)} value={this.state.data.Title} type="text" className="form-control" name="title" id="Title"  placeholder="title"/>
                  
                </div>

                <div className="form-group">
                  <label htmlFor="description">Description</label>
                  <input onChange={(e)=>this.handle(e)} value={this.state.data.Description} type="text" className="form-control" name="description" id="Description"  placeholder="description"/>
                  
                </div>

                <button className="btn btn-primary">Submit</button>




                </form>
            </div>
        )
    }
}
