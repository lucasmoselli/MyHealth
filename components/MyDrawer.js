import { DrawerContentScrollView, DrawerItem, DrawerItemList } from "@react-navigation/drawer";

const MyDrawer = (props) => {
    return(
        <DrawerContentScrollView {...props}>
            <DrawerItemList {...props}/>
        </DrawerContentScrollView>
    )
}

export default MyDrawer