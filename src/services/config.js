export const contractAdress = '0x5937357DEa6285CDBff5D5dc981520C2E02B2dd7';

export const contractABI = [
  {
    inputs: [],
    stateMutability: 'payable',
    type: 'constructor',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'sender',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'bool',
        name: 'confirmed',
        type: 'bool',
      },
    ],
    name: 'RegisteredProduct',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [],
    name: 'alert',
    type: 'event',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'orderId',
        type: 'uint256',
      },
    ],
    name: 'delivery',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'depositedAmount',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'orderId',
        type: 'uint256',
      },
    ],
    name: 'getOrder',
    outputs: [
      {
        components: [
          {
            internalType: 'uint256',
            name: 'id',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'productId',
            type: 'uint256',
          },
          {
            internalType: 'address',
            name: 'buyer',
            type: 'address',
          },
          {
            internalType: 'bool',
            name: 'delivered',
            type: 'bool',
          },
        ],
        internalType: 'struct SmartContract.Order',
        name: 'order',
        type: 'tuple',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getOrders',
    outputs: [
      {
        components: [
          {
            internalType: 'uint256',
            name: 'id',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'productId',
            type: 'uint256',
          },
          {
            internalType: 'address',
            name: 'buyer',
            type: 'address',
          },
          {
            internalType: 'bool',
            name: 'delivered',
            type: 'bool',
          },
        ],
        internalType: 'struct SmartContract.Order[]',
        name: '',
        type: 'tuple[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_index',
        type: 'uint256',
      },
    ],
    name: 'getProduct',
    outputs: [
      {
        components: [
          {
            internalType: 'address',
            name: 'owner',
            type: 'address',
          },
          {
            internalType: 'address',
            name: 'farmer',
            type: 'address',
          },
          {
            internalType: 'string',
            name: 'name',
            type: 'string',
          },
          {
            internalType: 'uint256',
            name: 'price',
            type: 'uint256',
          },
          {
            internalType: 'string',
            name: 'typeItem',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'plantingLocation',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'plantingDate',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'plantingMethod',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'harvestDate',
            type: 'string',
          },
          {
            internalType: 'enum SmartContract.Status',
            name: 'status',
            type: 'uint8',
          },
        ],
        internalType: 'struct SmartContract.Product',
        name: 'product',
        type: 'tuple',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getProducts',
    outputs: [
      {
        components: [
          {
            internalType: 'address',
            name: 'owner',
            type: 'address',
          },
          {
            internalType: 'address',
            name: 'farmer',
            type: 'address',
          },
          {
            internalType: 'string',
            name: 'name',
            type: 'string',
          },
          {
            internalType: 'uint256',
            name: 'price',
            type: 'uint256',
          },
          {
            internalType: 'string',
            name: 'typeItem',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'plantingLocation',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'plantingDate',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'plantingMethod',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'harvestDate',
            type: 'string',
          },
          {
            internalType: 'enum SmartContract.Status',
            name: 'status',
            type: 'uint8',
          },
        ],
        internalType: 'struct SmartContract.Product[]',
        name: '',
        type: 'tuple[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'productId',
        type: 'uint256',
      },
    ],
    name: 'payProduct',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'productId',
        type: 'uint256',
      },
      {
        internalType: 'address',
        name: 'buyer',
        type: 'address',
      },
      {
        internalType: 'bool',
        name: 'delivered',
        type: 'bool',
      },
    ],
    name: 'setOrder',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: '_name',
        type: 'string',
      },
      {
        internalType: 'uint256',
        name: '_price',
        type: 'uint256',
      },
      {
        internalType: 'string',
        name: '_typeItem',
        type: 'string',
      },
      {
        internalType: 'string',
        name: '_plantingLocation',
        type: 'string',
      },
      {
        internalType: 'string',
        name: '_plantingDate',
        type: 'string',
      },
      {
        internalType: 'string',
        name: '_plantingMethod',
        type: 'string',
      },
      {
        internalType: 'string',
        name: '_harvestDate',
        type: 'string',
      },
    ],
    name: 'setProduct',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
];
