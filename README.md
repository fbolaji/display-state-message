### Description: 
The purpose of getProcesssingPage helper function is to determine the output of the different state to go to base on the @param passed.
If state is 'processing' then it will be delay by 2s before proceeding to the next state. if next state has an error then an error code then it will output an error message... verse versa.


### Usage: 

1. for quick access, open the index.html change the @param and launch in the browser
2. open browser console log to view the message output.
3. then invoke by calling and pass @params as array of data e.g {state: 'processing', state: 'error'}:
    getProcessingPage({state: 'processing', state: 'error'});
4. Test by changing the @param to meet the different scenario as per requirement.

if imported as module into another js file e.g import { getProcessingPage } from './getProcessPage';
Please repeat the above steps 2 to 4.
 
