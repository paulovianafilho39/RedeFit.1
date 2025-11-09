import React, { useState } from 'react';
import { Product, User } from '../types';
import { MapPinIcon } from './icons/MapPinIcon';
import { XIcon } from './icons/XIcon';

interface MarketplacePageProps {
    products: Product[];
    users: User[];
}

const ProductDetailModal: React.FC<{ product: Product, seller: User, onClose: () => void }> = ({ product, seller, onClose }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const nextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % product.imageUrls.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex - 1 + product.imageUrls.length) % product.imageUrls.length);
    };

    return (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4" onClick={onClose}>
            <div className="bg-gray-800 rounded-lg w-full max-w-md max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
                <div className="relative">
                    <img src={product.imageUrls[currentImageIndex]} alt={product.name} className="w-full h-64 object-cover rounded-t-lg" />
                    {product.imageUrls.length > 1 && (
                        <>
                            <button onClick={prevImage} className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full">‹</button>
                            <button onClick={nextImage} className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full">›</button>
                        </>
                    )}
                     <button onClick={onClose} className="absolute top-2 right-2 bg-black/50 text-white p-2 rounded-full">
                        <XIcon className="w-5 h-5" />
                    </button>
                </div>
                <div className="p-4">
                    <h2 className="text-2xl font-bold">{product.name}</h2>
                    <p className="text-sm text-gray-400 font-semibold mb-2">{product.brand}</p>
                    <p className="text-3xl font-bold text-red-500 my-3">${product.price.toFixed(2)}</p>
                    <div className="flex items-center text-gray-400 text-sm mb-4">
                        <MapPinIcon className="w-4 h-4 mr-2" />
                        <span>{product.location}</span>
                    </div>
                    <p className="text-gray-300 mb-6">{product.description}</p>
                    
                    <div className="bg-gray-700 rounded-lg p-3">
                        <p className="text-xs text-gray-400 mb-2">Vendido por:</p>
                        <div className="flex items-center">
                            <img src={seller.profilePicture} alt={seller.username} className="w-12 h-12 rounded-full mr-3" />
                            <div className="flex-1">
                                <p className="font-bold">{seller.fullName}</p>
                                <p className="text-sm text-gray-400">@{seller.username}</p>
                            </div>
                            <button onClick={() => alert(`Contatando ${seller.username}... (Funcionalidade a implementar)`)} className="bg-red-600 text-white font-bold py-2 px-4 rounded-lg text-sm hover:bg-red-700 transition-colors">
                                Entrar em contato
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const SellView: React.FC = () => {
    return (
        <div className="p-4 space-y-4">
            <h2 className="text-2xl font-bold text-center">Anunciar um Produto</h2>
            <div>
                <label className="text-sm font-bold text-gray-400">Nome do Produto</label>
                <input type="text" className="w-full bg-gray-700 border border-gray-600 rounded-lg p-2 mt-1 text-white focus:outline-none focus:ring-2 focus:ring-red-500" />
            </div>
            <div>
                <label className="text-sm font-bold text-gray-400">Marca</label>
                <input type="text" className="w-full bg-gray-700 border border-gray-600 rounded-lg p-2 mt-1 text-white focus:outline-none focus:ring-2 focus:ring-red-500" />
            </div>
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <label className="text-sm font-bold text-gray-400">Preço (USD)</label>
                    <input type="number" placeholder="49.99" className="w-full bg-gray-700 border border-gray-600 rounded-lg p-2 mt-1 text-white focus:outline-none focus:ring-2 focus:ring-red-500" />
                </div>
                 <div>
                    <label className="text-sm font-bold text-gray-400">Localização</label>
                    <input type="text" placeholder="Cidade, UF" className="w-full bg-gray-700 border border-gray-600 rounded-lg p-2 mt-1 text-white focus:outline-none focus:ring-2 focus:ring-red-500" />
                </div>
            </div>
             <div>
                <label className="text-sm font-bold text-gray-400">Descrição</label>
                <textarea rows={4} className="w-full bg-gray-700 border border-gray-600 rounded-lg p-2 mt-1 text-white focus:outline-none focus:ring-2 focus:ring-red-500"></textarea>
            </div>
             <div>
                <label className="text-sm font-bold text-gray-400 mb-2 block">Fotos (até 3)</label>
                <div className="grid grid-cols-3 gap-2">
                    <div className="aspect-square bg-gray-700 rounded-lg flex items-center justify-center text-gray-500 border-2 border-dashed border-gray-600"><span>+</span></div>
                    <div className="aspect-square bg-gray-700 rounded-lg flex items-center justify-center text-gray-500 border-2 border-dashed border-gray-600"><span>+</span></div>
                    <div className="aspect-square bg-gray-700 rounded-lg flex items-center justify-center text-gray-500 border-2 border-dashed border-gray-600"><span>+</span></div>
                </div>
            </div>
            <button className="w-full bg-red-600 text-white font-bold py-3 rounded-lg hover:bg-red-700 transition-colors mt-4">
                Publicar Produto
            </button>
        </div>
    )
}

const MarketplacePage: React.FC<MarketplacePageProps> = ({ products, users }) => {
    const [view, setView] = useState<'buy' | 'sell'>('buy');
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
    const userMap = new Map(users.map(user => [user.id, user]));

    const seller = selectedProduct ? userMap.get(selectedProduct.sellerId) : null;
    
    return (
        <div className="pt-14 pb-16">
            <div className="p-2 bg-gray-900 sticky top-14 z-5">
                <div className="flex bg-gray-800 rounded-lg p-1">
                    <button onClick={() => setView('buy')} className={`w-1/2 font-bold py-2 rounded-md ${view === 'buy' ? 'bg-red-600 text-white' : 'text-gray-300'}`}>Comprar</button>
                    <button onClick={() => setView('sell')} className={`w-1/2 font-bold py-2 rounded-md ${view === 'sell' ? 'bg-red-600 text-white' : 'text-gray-300'}`}>Vender</button>
                </div>
            </div>
            
            {view === 'buy' ? (
                 <div className="grid grid-cols-2 gap-3 p-2">
                    {products.map(product => (
                        <div key={product.id} onClick={() => setSelectedProduct(product)} className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700 cursor-pointer">
                            <img src={product.imageUrls[0]} alt={product.name} className="w-full h-32 object-cover" />
                            <div className="p-3">
                                <h3 className="font-semibold text-sm truncate">{product.name}</h3>
                                <p className="text-lg font-bold text-red-500 mt-1">${product.price.toFixed(2)}</p>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <SellView />
            )}

            {selectedProduct && seller && (
                <ProductDetailModal 
                    product={selectedProduct} 
                    seller={seller}
                    onClose={() => setSelectedProduct(null)} 
                />
            )}
        </div>
    );
};

export default MarketplacePage;