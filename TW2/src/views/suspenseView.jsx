export function SuspenseView(props) {
  if (!props.promise) {
    return <span>no data</span>;
  } else if (props.error) {
    return <span>{props.error.toString()}</span>;
  } else {
    return <img src="https://brfenergi.se/iprog/loading.gif" />;
  }
}
