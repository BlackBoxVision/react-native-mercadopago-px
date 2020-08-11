require "json"

package = JSON.parse(File.read(File.join(__dir__, "package.json")))
mercadopago_px_sdk_version = package['sdkVersions']['ios']['mercadopagopx'] || '4.32.4'

Pod::Spec.new do |s|
  s.name         = "blackbox-vision-react-native-mercadopago-px"
  s.version      = package["version"]
  s.summary      = package["description"]
  s.homepage     = package["homepage"]
  s.license      = package["license"]
  s.authors      = package["author"]
  s.social_media_url    = 'https://twitter.com/blackbox_vision'

  s.platforms    = { :ios => "10.0" }
  s.source       = { :git => "https://github.com/BlackBoxVision/react-native-mercadopago-px.git", :tag => "#{s.version}" }
  
  s.ios.deployment_target = "10.0"
  s.source_files = "ios/**/*.{h,m,mm,swift}"

  s.swift_version = "4.2"

  # React Native dependencies
  s.dependency "React"

  if defined?($MercadoPagoPxSDKVersion)
    Pod::UI.puts "#{s.name}: Using user specified MercadoPago SDK version '#{$MercadoPagoPxSDKVersion}'"
    mercadopago_px_sdk_version = $MercadoPagoPxSDKVersion
  end

  # Add support for configuring custom SDK version
  s.dependency "MercadoPagoSDK", mercadopago_px_sdk_version

  # Add support to make it a static framework
  if defined?($RNMercadoPagoPxAsStaticFramework)
    Pod::UI.puts "#{s.name}: Using overridden static_framework value of '#{$RNMercadoPagoPxAsStaticFramework}'"
    s.static_framework = $RNMercadoPagoPxAsStaticFramework
  else
    s.static_framework = false
  end
end
