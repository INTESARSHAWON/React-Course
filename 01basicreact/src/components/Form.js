import React from 'react';

class Form extends React.Component{
    state = {
        title: 'JavaScript',
        text: 'JavaScript is awesome',
        library: 'React',
        isAwesome: true
    };

    handleChange = ((e)=>{
        if (e.target.type === 'text') {
            // console.log(e.target.value);
            this.setState({
            title: e.target.value,
        })
        }
        else if (e.target.type === 'textarea'){
            this.setState({
            text: e.target.value
        })        
        }
        else if (e.target.type === 'select-one'){
            this.setState({
            library: e.target.value
        })        
        }
        else if (e.target.type === 'checkbox'){
            this.setState({
            isAwesome: e.target.checked
        })        
        }
        else {
            console.log("nothing");
        }
    });

    submitHandler = (e)=>{
        const {title, text, library, isAwesome} =this.state;
        e.preventDefault();
        console.log(title, text, library, isAwesome);
    };

    render () {
        const {title, text, library, isAwesome} =this.state;
        return(
            <div>
                <form onSubmit = {this.submitHandler}>
                    <input type='text' value={null} />
                <br/>
                <br/>
                    <input type='text' placeholder='Enter Title' value={title} onChange={this.handleChange} />
                </form>
                    <p>{title}</p>
                <br/>
                <br/>
                    <textarea name='text' value={text} onChange={this.handleChange} ></textarea>
                <br/>
                <br/>
                    <select value={library} onChange={this.handleChange}>
                        <option value='React'>React</option>
                        <option value='Veu'>Veu</option>
                        <option value='Angular'>Angular</option>
                    </select>
                <br/>
                <br/>
                    <input type='checkbox' checked={isAwesome} onChange={this.handleChange} />
                <br/>
                <br/>
                    <input type='submit' value='Submit'/>
            </div>
        )
    }
}
// input a value dea mane React ke conroll diye dea, noytw se mone kore etake HTML handle kortese
// Value dile seta ke control korar jonne state ana lage, noytw react seta ke control korte pare na

export default Form