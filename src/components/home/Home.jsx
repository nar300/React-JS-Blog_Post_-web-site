import React, { Component } from 'react'
import { createBlog, getAllBlog, deleteBlog } from '../../services/Homeservice';

export default class Home extends Component {


constructor(props){
    super(props)
    this.state={
        data:{
            Title: "",
            Description: "",
        },
        isError:false,
        BlogList:[],
    }
}

componentWillMount(){
     
    getAllBlog()
    .then(res=>{
       
      
        this.setState({BlogList:res.data})
    }).catch(err=>{console.error(err)
    
    this.setState({isError:true})
    }
    
    )
}


Submit(e){
    e.preventDefault()

    createBlog(this.state.data).then(res=>{
      
        const  newdata=[...this.state.BlogList,res.data]
        this.setState({BlogList:newdata})
        this.setState({isError:false})
    }).catch(err=>{
        console.error(err)
        this.setState({isError:true})
    })

}

handle(e){
    const mydata ={...this.state.data}
    mydata[e.target.id]=e.target.value;

    this.setState({data:mydata})

}
  
remove(id){
    
    deleteBlog(id)
    .then(res=>{
       
        this.componentWillMount();
    }).catch(err=>{console.error(err)
     this.isError=true;
    })
}

update(id){
    console.log(id)
    this.props.history.push("/Update/"+id)
}




    render() {

        const display = this.state.BlogList.map(item=>{
            return (
                <div className="card" key={item.id}>
                   
                    <div className="card-body">
                        <h4 className="card-title">{item.Title}</h4>
                        <p className="card-text">{item.Description}</p>
                    </div>
                    <button onClick={()=>this.remove(item.id)} className="btn btn-primary">Delete</button>
                    <button onClick={()=>this.update(item.id)} className="btn btn-Success">Update</button>
                </div>
            )
        }

            )

      


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

                {this.state.isError && 
                <div className="alert alert-danger">please check</div>
                }


                {display}
            </div>

           



     

            
        )
    }
}
