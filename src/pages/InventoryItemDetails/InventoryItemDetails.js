import "./InventoryItemDetails.scss";

function InventoryItemDetails() {

  const [inventoryItemDetails, setInventoryItemDetails] = useState(null);
  const { inventoryId } = useParams();

  useEffect(() => {
    axios
       .get(`http://localhost:8080/inventory/${inventoryId}`)
       .then((response) => {
         if (response.status === 200) {
            console.log(response);
            setInventoryItemDetails(response.data);
         }
         })
        .catch((error) => {
            return <h2>{error.message}</h2>;
        });
  }, []); 
  
  if (!inventoryItemDetails) {
    return <h2>Loading...</h2>
  }

  return (
    <>
      <InventoryItemHeader/>
      <InventoryItemDescription inventoryArray={inventoryItemDetails}/>
    </>
  );
}

export default InventoryItemDetails;
