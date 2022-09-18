import React from 'react';
import MarketplaceAppCard from './MarketplaceAppCard';

export default function MarketplaceAppLayout() {
  return (
<>
<div className="grid lg:!grid-cols-4 md:!grid-cols-2 grid-cols-1 w-full px-8 gap-4 mt-8">
<MarketplaceAppCard appTitle="Wordpress" href="marketplace/Wordpress" image={"/images/wordpress.png"} rating="5.0"/>
<MarketplaceAppCard appTitle="Odoo" href="marketplace/Odoo" image={"/images/odoo.png"} rating="4.9"/>
<MarketplaceAppCard appTitle="Magento" href="marketplace/Magento" image={"/images/magento-new.png"} rating="5.0"/>
<MarketplaceAppCard appTitle="Woocommerce" href="marketplace/WooCommerce" image={"/images/woocomm.png"} rating="4.7"/>
</div>
<div className="grid lg:!grid-cols-4 md:!grid-cols-2 grid-cols-1 w-full px-8 gap-4 mt-8">
<MarketplaceAppCard appTitle="Wordpress" href="marketplace/Wordpress" image={"/images/odoo.png"} rating="5.0"/>
<MarketplaceAppCard appTitle="Odoo" href="marketplace/Odoo" image={"/images/odoo.png"} rating="4.9"/>
<MarketplaceAppCard appTitle="Magento" href="marketplace/Magento" image={"/images/magento-new.png"} rating="5.0"/>
<MarketplaceAppCard appTitle="Woocommerce" href="marketplace/WooCommerce" image={"/images/woocomm.png"} rating="4.7"/>
</div>


</>
  )
}
