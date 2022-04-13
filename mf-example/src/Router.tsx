
const route1 = 'route-one';
const route2 = 'route-two';

interface RouteProps {
  changeRoute: (route: string) => void
}

const RouteOne = ({ changeRoute }: RouteProps) => {
  return (
    <div>
      <h3>Route One</h3>
      <button type="button" onClick={() => changeRoute(route2)}>Route 2</button>
    </div>
  )
}

const RouteTwo = ({ changeRoute }: RouteProps) => {
  return (
    <div>
      <h3>Route Two</h3>
      <button type="button" onClick={() => changeRoute(route1)}>Route 1</button>
    </div>
  )
}

const FourZeroFour = ({ changeRoute }: RouteProps) => {
  return (
    <div>
      <h3>404</h3>
      <button type="button" onClick={() => changeRoute(route1)}>Route 1</button>
      <button type="button" onClick={() => changeRoute(route2)}>Route 2</button>
    </div>
  )
}

interface Props {
  route: string
}

const Router = ({ route }: Props) => {
  const changeRoute = (newRoute: string) => {
    const event = new CustomEvent('nova-route-change', {
      detail: {
        route: newRoute,
      },
    });
    window.dispatchEvent(event);
  }
  switch (route) {
    case route1:
      return <RouteOne changeRoute={changeRoute} />
    case route2:
      return <RouteTwo changeRoute={changeRoute} />
    default:
      return <FourZeroFour changeRoute={changeRoute} />
  }
}

export default Router
