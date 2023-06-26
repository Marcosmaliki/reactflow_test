export default function getNodesEdges() {
  //* NOTE: this is a modified payload, actual payload will not return all the root objects at the same time
  const payload = {
    data: {
      traceByResource: {
        id: "8280645e-2452-4b66-a598-fca5fda767ef",
        trackingNumber: "989HH",
        notes: "Testing",
        stage: {
          id: "41042813-803b-4db0-9f5e-b8a7b45a2ffe",
          name: "Delivery",
          type: "DISTRIBUTION",
          description: "Deliver to School",
        },
        dispatch: {
          id: "ec3853b9-dd50-40b5-85b7-7fcc1e72e76a",
          RFID: "989HH",
          order: {
            id: "5d825233-8c0b-4ccb-86d6-15a337e5d8e3",
            description: null,
            createdAt: "2023-06-22T12:59:36.553Z",
            updatedAt: "2023-06-22T13:07:29.329Z",
            status: "IN_PROGRESS",
            orderFrom: "kitchen",
          },
          vessel: {
            id: "997514e6-6133-47df-915c-4205552134bb",
            model: "Honda",
            licencePlate: "KDM 3456",
          },
          location: null,
          packhouse: {
            id: "3dd35123-6de6-4b62-8b6d-73c3b3302e07",
            location: "Naivasha, Kenya",
          },
          DispatchItem: [
            {
              id: "09f82aed-0870-441e-bbe7-ca30ce4cd433",
              Aggregation: {
                lotNumber: "1223HH/2006230122",
                AggregationItem: [
                  {
                    id: "0cea328c-2147-4039-b981-abe2657befe0",
                    Collection: {
                      id: "aeb8cc7e-d046-4a89-92b6-1be9936ebd26",
                      batchNumber:
                        "32E9F2EE-B752-4EA8-9C07-8D3F197C4F18/1223HH/2006230119",
                      harvestedOn: null,
                      product: {
                        id: "516cc652-1034-4f64-9444-fa6d6d48707e",
                        name: "Mangoes",
                        sku: "1212DD",
                        description: null,
                        shelfLife: "5 days",
                      },
                      supplier: {
                        id: "32e9f2ee-b752-4ea8-9c07-8d3f197c4f18",
                        fname: "Jack",
                      },
                    },
                  },
                  {
                    id: "78760693-3554-4383-9480-db166d406d6e",
                    Collection: {
                      id: "aab887a2-371a-4f56-a61c-ae15b435fc25",
                      batchNumber:
                        "32E9F2EE-B752-4EA8-9C07-8D3F197C4F18/1223HH/2006230121",
                      harvestedOn: null,
                      product: {
                        id: "516cc652-1034-4f64-9444-fa6d6d48707e",
                        name: "Mangoes",
                        sku: "1212DD",
                        description: null,
                        shelfLife: "5 days",
                      },
                      supplier: {
                        id: "32e9f2ee-b752-4ea8-9c07-8d3f197c4f18",
                        fname: "Jack",
                      },
                    },
                  },
                ],
              },
              Collection: null,
              Manufacturing: null,
            },
            {
              id: "2671fdab-894a-4b9f-9b11-4a6dbd524247",
              Aggregation: {
                lotNumber: "1212DD/2006230124",
                AggregationItem: [
                  {
                    id: "e4d68227-dd6f-4a0d-9671-94883a9d7a76",
                    Collection: {
                      id: "80d00546-c5f7-4560-be39-0132cc2ec88d",
                      batchNumber:
                        "7A88EF3B-DE77-4576-B0FC-F45D25517E38/1212DD/2006230123",
                      harvestedOn: null,
                      product: {
                        id: "516cc652-1034-4f64-9444-fa6d6d48707e",
                        name: "Mangoes",
                        sku: "1212DD",
                        description: null,
                        shelfLife: "5 days",
                      },
                      supplier: {
                        id: "7a88ef3b-de77-4576-b0fc-f45d25517e38",
                        fname: "Ian",
                      },
                    },
                  },
                ],
              },
              Collection: null,
              Manufacturing: null,
            },
            {
              id: "34cee15e-5f68-4f82-b29e-1915b21257ca",
              Aggregation: null,
              Collection: null,
              Manufacturing: {
                id: "bd5a11c6-f978-4a56-ab74-922aac89cf3f",
                Items: [
                  {
                    id: "qwqwqwqwqw-894a-4b9f-9b11-434343wwe",
                    Aggregation: {
                      id: "d6b188ac-d2de-41e9-825e-1fec2dea49d9",
                      lotNumber: "1212DD/2006230124",
                      AggregationItem: [
                        {
                          id: "e4d68227-c16f-4a0d-9671-94883a9d7a76",
                          Collection: {
                            id: "80d00546-c5f7-4560-b3e9-0132cc2ec88d",
                            batchNumber:
                              "7A88EF3B-DE77-4576-B0FC-F45D25eww7E38/1212DD/2006230123",
                            harvestedOn: null,
                            product: {
                              id: "516cc652-1034-4f64-9444-fa6d6d48707e",
                              name: "Mangoes",
                              sku: "1212DD",
                              description: null,
                              shelfLife: "5 days",
                            },
                            supplier: {
                              id: "7a88ef3b-de77-4576-b0fc-f45d25517e38",
                              fname: "Ian",
                            },
                          },
                        },
                      ],
                    },
                    Collection: null,
                  },
                ],
              },
            },
          ],
        },

        // Manufacturing: {
        //   id: "bd5a11c6-f978-4a56-ab74-922aac89cf3f",
        //   Items: [
        //     {
        //       id: "455c7c24-63d7-41c4-bdee-8167bf8b2440",
        //       Aggregation: {
        //         id: "d6b188ac-d2de-41e9-825e-1fec2dea49d9",
        //         lotNumber: "1212DD/2006230124",
        //         AggregationItem: [
        //           {
        //             id: "e4d68227-c16f-4a0d-9671-94883a9d7a76",
        //             Collection: {
        //               id: "80d00546-c5f7-4560-be39-0132cc2ec88d",
        //               batchNumber:
        //                 "7A88EF3B-DE77-4576-B0FC-F45D25517E38/1212DD/2006230123",
        //               harvestedOn: null,
        //               product: {
        //                 id: "516cc652-1034-4f64-9444-fa6d6d48707e",
        //                 name: "Mangoes",
        //                 sku: "1212DD",
        //                 description: null,
        //                 shelfLife: "5 days",
        //               },
        //               supplier: {
        //                 id: "7a88ef3b-de77-4576-b0fc-f45d25517e38",
        //                 fname: "Ian",
        //               },
        //             },
        //           },
        //         ],
        //       },
        //       Collection: null,
        //     },
        //   ],
        // },

        // aggregation: {
        //   id: "d6b188ac-d2de-41e9-825e-1fec2dea49d9",
        //   lotNumber: "1212DD/2006230124",
        //   AggregationItem: [
        //     {
        //       id: "e4d68227-c16f-4a0d-9671-94883a9d7a76",
        //       Collection: {
        //         id: "80d00546-c5f7-4560-be39-0132cc2ec88d",
        //         batchNumber:
        //           "7A88EF3B-DE77-4576-B0FC-F45D25517E38/1212DD/2006230123",
        //         harvestedOn: null,
        //         product: {
        //           id: "516cc652-1034-4f64-9444-fa6d6d48707e",
        //           name: "Mangoes",
        //           sku: "1212DD",
        //           description: null,
        //           shelfLife: "5 days",
        //         },
        //         supplier: {
        //           id: "7a88ef3b-de77-4576-b0fc-f45d25517e38",
        //           fname: "Ian",
        //         },
        //       },
        //     },
        //   ],
        // },
        // collection: {
        //   id: "80d00546-c5f7-4560-be39-0132cc2ec88d",
        //   batchNumber: "7A88EF3B-DE77-4576-B0FC-F45D25517E38/1212DD/2006230123",
        //   harvestedOn: null,
        //   product: {
        //     id: "516cc652-1034-4f64-9444-fa6d6d48707e",
        //     name: "Mangoes",
        //     sku: "1212DD",
        //     description: null,
        //     shelfLife: "5 days",
        //   },
        //   supplier: {
        //     id: "7a88ef3b-de77-4576-b0fc-f45d25517e38",
        //     fname: "Ian",
        //   },
        // },
      },
    },
  };

 
  const nodes = [],
    edges: any[] = [],
    type = "custom",
    position = { x: 0, y: 0 };

  //* From Dispatch - RFID
  if (payload.data.traceByResource.stage.type === "DISTRIBUTION" ) {
    /**
     * The main process should be
     * dispatch << aggregation(s) << collection(s)
     * or
     * dispatch << manufacturing(s) << aggregation(s) << collection(s)
     */


    const dispatch = payload.data.traceByResource.dispatch;

    //stage 1: dispatch
    nodes.push({
      id: dispatch.id,
      data: {
        id: dispatch.id,
        label: `DISPATCH ${dispatch.RFID}`,
        RFID: dispatch.RFID,
        order: dispatch.order,
        vessel: dispatch.vessel,
        location: dispatch.location ?? "N/A",
        packhouse: dispatch.packhouse ?? "N/A",
        items: `${dispatch.DispatchItem.length} items`,
      },
      type,
      position,
    });

    for (let i of dispatch.DispatchItem) {

      //stage 2: manufacturing
      if (i.Manufacturing) {
        const m = i.Manufacturing;
        nodes.push({
          id: i.id,
          data: {
            id: i.id,
            label: `PROCESSING ${m.id}`,
            items: m.Items.length,
          },
          type,
          position,
        });

        edges.push({
          id: i.id,
          source: dispatch.id,
          target: i.id,
          label: "PROCESSING",
        });

        for (let v of m.Items) {
          if (v.Aggregation) {
            const ag = v.Aggregation;
            //stage 3: aggregation
            nodes.push({
              id: v.id,
              data: {
                id: v.id,
                label: `AGGREGATION ${ag.lotNumber}`,
                lotNumber: ag.lotNumber,
                items: ag.AggregationItem.length,
              },
              type,
              position,
            });

            edges.push({
              id: v.id,
              source: m.id,
              // target: i.id,
              target: v.id,
              label: "Aggregation",
            });

            for (let x of ag.AggregationItem) {
              const collection = x.Collection;
              //stage 4: collection
              nodes.push({
                id: x.id,
                data: {
                  label: `COLLECTION ${collection.batchNumber})`,
                  batchNumber: collection.batchNumber,
                  harvestedOn: collection.harvestedOn ?? "N/A",
                  supplier: collection.supplier,
                  items: "TODO: add products count",
                },
                type,
                position,
              });

              edges.push({
                id: x.id,
                source: i.id,
                target: x.id,
                label: "Collection",
              });
            }
          }

          // getAggregationNodes(v, dispatch, type, position);
        }
      }

       //stage 2: aggregation
       if (i.Aggregation) {
        const ag = i.Aggregation;
        nodes.push({
          id: i.id,
          data: {
            id: i.id,
            label: `AGGREGATION ${ag.lotNumber}`,
            lotNumber: ag.lotNumber,
            items: ag.AggregationItem.length,
          },
          type,
          position,
        });

        edges.push({
          id: i.id,
          source: dispatch.id,
          target: i.id,
          label: "Aggregation",
        });

        for (let x of ag.AggregationItem) {
          const collection = x.Collection;
          //stage 3: collection
          nodes.push({
            id: x.id,
            data: {
              label: `COLLECTION ${collection.batchNumber})`,
              batchNumber: collection.batchNumber,
              harvestedOn: collection.harvestedOn ?? "N/A",
              supplier: collection.supplier,
              product: collection.product,
            },
            type,
            position,
          });

          edges.push({
            id: x.id,
            source: i.id,
            target: x.id,
            label: "Collection",
          });
        }
      }

      // if (i.Aggregation) {
      //     getAggregationNodes(i, dispatch, type, position);
      // }
    }
  }

  // //* From Manufacturing
  // if (payload.data.traceByResource.stage.type === "PROCESSING") {
  //   const manufacturing = payload.data.traceByResource.Manufacturing;

  //   //stage 1: manufacturing
  //   nodes.push({
  //     id: manufacturing.id,
  //     data: {
  //       id: manufacturing.id,
  //       label: `PROCESSING ${manufacturing.id}`,
  //       items: manufacturing.Items.length,
  //     },
  //     type,
  //     position,
  //   });

  //   for (let i of manufacturing.Items) {
  //     //stage 2: aggregation
  //     if (i.Aggregation) {
  //       const ag = i.Aggregation;
  //       nodes.push({
  //         id: i.id,
  //         data: {
  //           id: i.id,
  //           label: `AGGREGATION ${ag.lotNumber}`,
  //           lotNumber: ag.lotNumber,
  //           items: ag.AggregationItem.length,
  //         },
  //         type,
  //         position,
  //       });

  //       edges.push({
  //         id: i.id,
  //         source: manufacturing.id,
  //         target: i.id,
  //         label: "Aggregation",
  //       });

  //       for (let x of ag.AggregationItem) {
  //         const collection = x.Collection;
  //         //stage 3: collection
  //         nodes.push({
  //           id: x.id,
  //           data: {
  //             label: `COLLECTION ${collection.batchNumber})`,
  //             batchNumber: collection.batchNumber,
  //             harvestedOn: collection.harvestedOn ?? "N/A",
  //             supplier: collection.supplier,
  //             product: collection.product,
  //           },
  //           type,
  //           position,
  //         });

  //         edges.push({
  //           id: x.id,
  //           source: i.id,
  //           target: x.id,
  //           label: "Collection",
  //         });
  //       }
  //     }
  //   }
  // }

  // //* From Aggregation
  // if (payload.data.traceByResource.stage.type === "AGGREGATION") {
  //   const aggregation = payload.data.traceByResource.aggregation;

  //   //stage 1: aggregation
  //   nodes.push({
  //     id: aggregation.id,
  //     data: {
  //       id: aggregation.id,
  //       label: `AGGREGATION ${aggregation.lotNumber}`,
  //       lotNumber: aggregation.lotNumber,
  //       items: aggregation.AggregationItem.length,
  //     },
  //     type,
  //     position,
  //   });

  //   for (let i of aggregation.AggregationItem) {
  //     const collection = i.Collection;
  //     //stage 2: collection
  //     nodes.push({
  //       id: i.id,
  //       data: {
  //         label: `COLLECTION ${collection.batchNumber})`,
  //         batchNumber: collection.batchNumber,
  //         harvestedOn: collection.harvestedOn ?? "N/A",
  //         supplier: collection.supplier,
  //         product: collection.product,
  //       },
  //       type,
  //       position,
  //     });

  //     edges.push({
  //       id: i.id,
  //       source: aggregation.id,
  //       target: i.id,
  //       label: "Collection",
  //     });
  //   }
  // }

  // //* From Collection (Not needed) - no need for edges
  // if (payload.data.traceByResource.stage.type === "COLLECTION") {
  //   const collection = payload.data.traceByResource.collection;

  //     //stage 1: collection
  //     nodes.push({
  //       id: collection.id,
  //       data: {
  //         label: `COLLECTION ${collection.batchNumber})`,
  //         batchNumber: collection.batchNumber,
  //         harvestedOn: collection.harvestedOn ?? "N/A",
  //         supplier: collection.supplier,
  //         product: collection.product,
  //       },
  //       type,
  //       position,
  //     });
  // }

  function getAggregationNodes(
    i: any,
    dispatch: any,
    type: any,
    position: any
  ) {
    const ag = i.Aggregation;
    //stage 2: aggregation
    nodes.push({
      id: i.id,
      data: {
        lotNumber: ag.lotNumber,
        items: ag.AggregationItem.length,
      },
      type,
      position,
    });

    edges.push({
      id: i.id,
      source: dispatch.id,
      target: i.id,
      label: "AGGREGATION",
    });

    for (let x of ag.AggregationItem) {
      const collection = x.Collection;
      //stage 3: collection
      nodes.push({
        id: x.id,
        data: {
          batchNumber: collection.batchNumber,
          harvestedOn: collection.harvestedOn ?? "N/A",
          supplier: collection.supplier,
          items: "TODO: add products count",
        },
        type,
        position,
      });

      edges.push({
        id: x.id,
        source: i.id,
        target: x.id,
        label: "COLLECTION",
      });
    }
  }

  return { nodes, edges };
}

console.log(JSON.stringify(getNodesEdges(), null, 7));
