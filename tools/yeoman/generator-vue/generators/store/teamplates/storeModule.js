
<% if(include.state){%>import state from './state';<%}%>
<% if(include.mutations){%>import * as mutations from './mutations';<%}%>
<% if(include.actions){%>import * as actions from './actions';<%}%>
<% if(include.getters){%>import * as getters from './getters';<%}%>

const module = {
    namespaced: true,
    <% if(include.state){%>state,<%}%>
    <% if(include.mutations){%>mutations,<%}%>
    <% if(include.actions){%>actions,<%}%>
    <% if(include.getters){%>getters,<%}%>
};

export default module;