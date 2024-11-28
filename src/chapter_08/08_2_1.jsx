<button onClick={(event)=>this.deleteItem(id,event)}>삭제하기</button>
<button onClick={this.deleteItem.bind(this,id)}>삭제하기</button>