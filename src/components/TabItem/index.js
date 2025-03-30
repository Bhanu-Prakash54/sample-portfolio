import './index.css'

const TabItem = props => {
  const {tabDetails, updateFilteredProjectsList, isActive} = props
  const {displayText, tabId} = tabDetails

  const activeClassName = isActive ? 'active-tab-btn' : ''

  const updateList = () => {
    updateFilteredProjectsList(tabId)
  }

  return (
    <li className="tab-item-container ">
      <button
        type="button"
        className={`tab-btn ${activeClassName}`}
        onClick={updateList}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
