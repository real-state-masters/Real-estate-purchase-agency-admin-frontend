import React from'react';
 
constuseFetch=()=>{​​​​​​​​
const[data,setData]=React.useState(null);
const[error,setError]=React.useState(null);
const[loading,setLoading]=React.useState(false);
 
constrequest=React.useCallback(async(url,options)=>{​​​​​​​​
letresponse;
letjson;
try{​​​​​​​​
setError(null);
setLoading(true);
response=awaitfetch(url,options);
json=awaitresponse.json();
if (response.ok===false) thrownewError(json.message);
}​​​​​​​​catch (err) {​​​​​​​​
json=null;
setError(err.message);
}​​​​​​​​finally{​​​​​​​​
setData(json);
setLoading(false);
return{​​​​​​​​response,json}​​​​​​​​;
}​​​​​​​​
}​​​​​​​​, []);
 
return{​​​​​​​​
data,
loading,
error,
request,
}​​​​​​​​;
}​​​​​​​​;

