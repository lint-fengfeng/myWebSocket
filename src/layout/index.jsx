import React from 'react';
import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom'
import loadable from '@loadable/component'
import Loading from '@/component/loading'

const asyncHome = loadable(() => import("@/route/home"), {
  LoadingComponent: Loading,
  timeout: 5000
})

const Layout = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/home" component={asyncHome} />
        <Redirect from="/" to="/home" component={asyncHome} />
      </Switch>
    </BrowserRouter>
  )
}

export default Layout