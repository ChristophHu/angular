# Angular-Folder-Structure
# by chris

# in linux/mac make this file to an excutable file by:
# chmod 755 angular-folder-structure.sh

# and execute it by:
# ./angular-folder-structure.sh
#
# https://medium.com/the-crowdlinker-chronicle/best-way-to-structure-your-directory-code-nestjs-a06c7a641401

# src/app
cd src/app/

# modules
mkdir modules
mkdir modules/components
mkdir modules/layouts
mkdir modules/pages
# modules-routing.module.ts
# modules.module.ts

# config
mkdir config

# core
mkdir core
mkdir core/authentication
mkdir core/footer
mkdir core/guards
mkdir core/models
mkdir core/navbar
mkdir core/services
mkdir core/sidebar
# core.module.ts

# shared
mkdir shared
mkdir shared/components
mkdir shared/directives
mkdir shared/pipes
mkdir shared/guard
# shared.module.ts

# src/assets
cd ../assets

mkdir font
mkdir icons
mkdir images
mkdir css

# sass
mkdir sass
mkdir sass/abstract
mkdir sass/base
mkdir sass/components
mkdir sass/layout
mkdir sass/pages
mkdir sass/themes
mkdir sass/vendors
