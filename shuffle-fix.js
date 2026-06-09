r=render;render=()=>{current=Q.find(q=>q.id===state.ids[state.pos]);o=shuffle(current.a.map((x,i)=>i));a=o.map(i=>current.a[i]);k=current.k.map(i=>o.indexOf(i));current.a=a;current.k=k;r()}
