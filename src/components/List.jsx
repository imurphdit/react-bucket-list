import PropTypes from 'prop-types';

function List({ items, title }) {
  return (
    <>
        <h2>{title}</h2>
        <ol>
            {items.map(item => (
                <li key={item.id}>{item.name}</li>
            ))}
        </ol>
    </>
  )
}

List.propTypes = {
    items: PropTypes.any,
    title: PropTypes.any,

}

export default List